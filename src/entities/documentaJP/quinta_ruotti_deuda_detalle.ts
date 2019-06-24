import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("quinta_ruotti_deuda_detalle",{schema:"redcobrosjp" } )
export class quinta_ruotti_deuda_detalle extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary: true,
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"ruc_o_ci"
        })
    ruc_o_ci:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"fecha_vencimiento_factura"
        })
    fecha_vencimiento_factura:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"mes_correspondiente_factura"
        })
    mes_correspondiente_factura:string;
        

    @Column("smallint",{ 
        nullable:true,
        default: () => "0",
        name:"estado_pago"
        })
    estado_pago:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_transaccion"
        })
    id_transaccion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"fecha_pago"
        })
    fecha_pago:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"monto_expensa_cochera"
        })
    monto_expensa_cochera:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"dpto"
        })
    dpto:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"nro_fact"
        })
    nro_fact:string | null;
        
}
