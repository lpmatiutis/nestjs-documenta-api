import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {config_clearing_servicio} from "./config_clearing_servicio";
import {recaudador} from "./recaudador";
import {sucursal} from "./sucursal";
import {config_comisional_detalle} from "./config_comisional_detalle";
import {distribucion_clearing} from "./distribucion_clearing";


@Entity("configuracion_comisional",{schema:"redcobrosjp" } )
export class configuracion_comisional extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_configuracion_comisional"
        })
    id_configuracion_comisional:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"habilitado"
        })
    habilitado:string;
        

   
    @ManyToOne(type=>config_clearing_servicio, config_clearing_servicio=>config_clearing_servicio.configuracionComisionals,{  nullable:false, })
    @JoinColumn({ name:'config_clearing_servicio'})
    configClearingServicio:Promise<config_clearing_servicio | null>;

    @RelationId((configuracion_comisional: configuracion_comisional) => configuracion_comisional.configClearingServicio)
    configClearingServicioId: Promise<string[]>;

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.configuracionComisionals,{  })
    @JoinColumn({ name:'recaudador'})
    recaudador:Promise<recaudador | null>;

    @RelationId((configuracion_comisional: configuracion_comisional) => configuracion_comisional.recaudador)
    recaudadorId: Promise<string[]>;

   
    @ManyToOne(type=>sucursal, sucursal=>sucursal.configuracionComisionals,{  })
    @JoinColumn({ name:'sucursal'})
    sucursal:Promise<sucursal | null>;

    @RelationId((configuracion_comisional: configuracion_comisional) => configuracion_comisional.sucursal)
    sucursalId: Promise<string[]>;

   
    @OneToMany(type=>config_comisional_detalle, config_comisional_detalle=>config_comisional_detalle.configuracionComisional)
    configComisionalDetalles:Promise<config_comisional_detalle[]>;
    

   
    @OneToMany(type=>distribucion_clearing, distribucion_clearing=>distribucion_clearing.configuracionComisional)
    distribucionClearings:Promise<distribucion_clearing[]>;
    
}
