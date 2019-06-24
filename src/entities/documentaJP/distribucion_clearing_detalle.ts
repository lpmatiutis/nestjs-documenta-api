import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {config_comisional_detalle} from "./config_comisional_detalle";
import {distribucion_clearing} from "./distribucion_clearing";
import {rol_comisionista} from "./rol_comisionista";


@Entity("distribucion_clearing_detalle",{schema:"redcobrosjp" } )
export class distribucion_clearing_detalle extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_dist_clearing_det"
        })
    id_dist_clearing_det:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion_beneficiario"
        })
    descripcion_beneficiario:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_beneficiario"
        })
    id_beneficiario:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"monto_comision"
        })
    monto_comision:number;
        

   
    @ManyToOne(type=>config_comisional_detalle, config_comisional_detalle=>config_comisional_detalle.distribucionClearingDetalles,{  nullable:false, })
    @JoinColumn({ name:'config_comisional_detalle'})
    configComisionalDetalle:Promise<config_comisional_detalle | null>;

    @RelationId((distribucion_clearing_detalle: distribucion_clearing_detalle) => distribucion_clearing_detalle.configComisionalDetalle)
    configComisionalDetalleId: Promise<string[]>;

   
    @ManyToOne(type=>distribucion_clearing, distribucion_clearing=>distribucion_clearing.distribucionClearingDetalles,{  nullable:false, })
    @JoinColumn({ name:'distribucion_clearing'})
    distribucionClearing:Promise<distribucion_clearing | null>;

    @RelationId((distribucion_clearing_detalle: distribucion_clearing_detalle) => distribucion_clearing_detalle.distribucionClearing)
    distribucionClearingId: Promise<string[]>;

   
    @ManyToOne(type=>rol_comisionista, rol_comisionista=>rol_comisionista.distribucionClearingDetalles,{  nullable:false, })
    @JoinColumn({ name:'rol_comisionista'})
    rolComisionista:Promise<rol_comisionista | null>;

    @RelationId((distribucion_clearing_detalle: distribucion_clearing_detalle) => distribucion_clearing_detalle.rolComisionista)
    rolComisionistaId: Promise<string[]>;

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"iva_comision"
        })
    iva_comision:number | null;
        
}
