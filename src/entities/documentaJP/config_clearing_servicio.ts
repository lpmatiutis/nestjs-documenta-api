import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {red} from "./red";
import {servicio} from "./servicio";
import {tipo_clearing} from "./tipo_clearing";
import {servicio_rc} from "./servicio_rc";
import {clearing} from "./clearing";
import {configuracion_comisional} from "./configuracion_comisional";


@Entity("config_clearing_servicio",{schema:"redcobrosjp" } )
export class config_clearing_servicio extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_config_clearing_servicio"
        })
    id_config_clearing_servicio:string;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"desde"
        })
    desde:number | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"habilitado"
        })
    habilitado:string;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"hasta"
        })
    hasta:number | null;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"valor"
        })
    valor:number;
        

   
    @ManyToOne(type=>red, red=>red.configClearingServicios,{  nullable:false, })
    @JoinColumn({ name:'red'})
    red:Promise<red | null>;

    @RelationId((config_clearing_servicio: config_clearing_servicio) => config_clearing_servicio.red)
    redId: Promise<string[]>;

   
    @ManyToOne(type=>servicio, servicio=>servicio.configClearingServicios,{  })
    @JoinColumn({ name:'servicio'})
    servicio:Promise<servicio | null>;

    @RelationId((config_clearing_servicio: config_clearing_servicio) => config_clearing_servicio.servicio)
    servicioId: Promise<string[]>;

   
    @ManyToOne(type=>tipo_clearing, tipo_clearing=>tipo_clearing.configClearingServicios,{  nullable:false, })
    @JoinColumn({ name:'tipo_clearing'})
    tipoClearing:Promise<tipo_clearing | null>;

    @RelationId((config_clearing_servicio: config_clearing_servicio) => config_clearing_servicio.tipoClearing)
    tipoClearingId: Promise<string[]>;

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.configClearingServicios,{  })
    @JoinColumn({ name:'servicio_rc'})
    servicioRc:Promise<servicio_rc | null>;

    @RelationId((config_clearing_servicio: config_clearing_servicio) => config_clearing_servicio.servicioRc)
    servicioRcId: Promise<string[]>;

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:2,
        name:"monto"
        })
    monto:string | null;
        

   
    @OneToMany(type=>clearing, clearing=>clearing.configClearingServicio)
    clearings:Promise<clearing[]>;
    

   
    @OneToMany(type=>configuracion_comisional, configuracion_comisional=>configuracion_comisional.configClearingServicio)
    configuracionComisionals:Promise<configuracion_comisional[]>;
    
}
