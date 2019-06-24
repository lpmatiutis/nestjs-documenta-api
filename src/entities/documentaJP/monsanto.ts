import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("monsanto",{schema:"redcobrosjp" } )
export class monsanto extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        name:"id_cliente"
        })
    id_cliente:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"ruc"
        })
    ruc:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"referencia_pago"
        })
    referencia_pago:string;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_monsanto"
        })
    id_monsanto:string;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:2,
        name:"importe"
        })
    importe:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:3,
        name:"moneda"
        })
    moneda:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"nombre_cliente"
        })
    nombre_cliente:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"concepto_deuda"
        })
    concepto_deuda:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"vencimiento"
        })
    vencimiento:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        default: () => "'N'",
        name:"pagado"
        })
    pagado:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"ult_update"
        })
    ult_update:Date | null;
        

    @Column("character",{ 
        nullable:true,
        name:"tipo_pago"
        })
    tipo_pago:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_transaccion"
        })
    id_transaccion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"nro_cheque"
        })
    nro_cheque:string | null;
        
}
