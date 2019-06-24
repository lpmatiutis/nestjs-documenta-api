import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {configuracion_comisional} from "./configuracion_comisional";
import {rol_comisionista} from "./rol_comisionista";
import {distribucion_clearing_detalle} from "./distribucion_clearing_detalle";


@Entity("config_comisional_detalle",{schema:"redcobrosjp" } )
export class config_comisional_detalle extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_config_comisional_detalle"
        })
    id_config_comisional_detalle:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion_beneficiario"
        })
    descripcion_beneficiario:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_beneficiario"
        })
    id_beneficiario:string | null;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"valor"
        })
    valor:number;
        

   
    @ManyToOne(type=>configuracion_comisional, configuracion_comisional=>configuracion_comisional.configComisionalDetalles,{  nullable:false, })
    @JoinColumn({ name:'configuracion_comisional'})
    configuracionComisional:Promise<configuracion_comisional | null>;

    @RelationId((config_comisional_detalle: config_comisional_detalle) => config_comisional_detalle.configuracionComisional)
    configuracionComisionalId: Promise<string[]>;

   
    @ManyToOne(type=>rol_comisionista, rol_comisionista=>rol_comisionista.configComisionalDetalles,{  nullable:false, })
    @JoinColumn({ name:'rol_comisionista'})
    rolComisionista:Promise<rol_comisionista | null>;

    @RelationId((config_comisional_detalle: config_comisional_detalle) => config_comisional_detalle.rolComisionista)
    rolComisionistaId: Promise<string[]>;

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:2,
        name:"monto"
        })
    monto:string | null;
        

   
    @OneToMany(type=>distribucion_clearing_detalle, distribucion_clearing_detalle=>distribucion_clearing_detalle.configComisionalDetalle)
    distribucionClearingDetalles:Promise<distribucion_clearing_detalle[]>;
    
}
