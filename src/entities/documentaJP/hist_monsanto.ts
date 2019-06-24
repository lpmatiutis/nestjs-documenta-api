import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("hist_monsanto",{schema:"redcobrosjp" } )
export class hist_monsanto extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_monsanto"
        })
    id_monsanto:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"nombre"
        })
    nombre:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"referencia_pago"
        })
    referencia_pago:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:2,
        name:"monto"
        })
    monto:string | null;
        

    @Column("character",{ 
        nullable:true,
        name:"tipo_pago"
        })
    tipo_pago:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"transaccion"
        })
    transaccion:string | null;
        

    @Column("character",{ 
        nullable:true,
        name:"notificado"
        })
    notificado:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_ingreso"
        })
    fecha_ingreso:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_notificado"
        })
    fecha_notificado:Date | null;
        

    @Column("character",{ 
        nullable:true,
        name:"pagado"
        })
    pagado:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"ruc"
        })
    ruc:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_ult_update"
        })
    fecha_ult_update:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_cliente"
        })
    id_cliente:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_vencimiento"
        })
    fecha_vencimiento:Date | null;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"noti_email"
        })
    noti_email:string;
        
}
