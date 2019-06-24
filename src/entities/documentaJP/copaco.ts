import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("copaco",{schema:"redcobrosjp" } )
@Index("in_cb_copaco",["codbarra","cuenta_datos",])
export class copaco extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"factura"
        })
    factura:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:6,
        name:"area"
        })
    area:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"telefono"
        })
    telefono:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:4,
        name:"moneda"
        })
    moneda:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"total_factura"
        })
    total_factura:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"monto_cobrar"
        })
    monto_cobrar:string | null;
        

    @Column("character",{ 
        nullable:true,
        length:2,
        name:"cod_movimiento"
        })
    cod_movimiento:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"fecha_pago"
        })
    fecha_pago:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"vencimiento"
        })
    vencimiento:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"emision"
        })
    emision:string | null;
        

    @Column("character",{ 
        nullable:true,
        length:2,
        name:"tipo_cliente"
        })
    tipo_cliente:string | null;
        

    @Column("character",{ 
        nullable:true,
        length:4,
        name:"banco_id"
        })
    banco_id:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"total_citsa"
        })
    total_citsa:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"total_antelco"
        })
    total_antelco:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"conexion_gs"
        })
    conexion_gs:string | null;
        

    @Column("character",{ 
        nullable:true,
        length:2,
        name:"tipo_cuenta"
        })
    tipo_cuenta:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:40,
        name:"cuenta_banco"
        })
    cuenta_banco:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"cuenta_datos"
        })
    cuenta_datos:string | null;
        

    @Column("character",{ 
        nullable:true,
        length:4,
        name:"emisor"
        })
    emisor:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"tipo_factura"
        })
    tipo_factura:string | null;
        

    @Column("character",{ 
        nullable:true,
        length:100,
        name:"cod_despacho"
        })
    cod_despacho:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"nombre_cli"
        })
    nombre_cli:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"iva"
        })
    iva:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"comision"
        })
    comision:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"iva_comision"
        })
    iva_comision:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:80,
        name:"periodofact"
        })
    periodofact:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:80,
        name:"codbarra"
        })
    codbarra:string | null;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"pagado"
        })
    pagado:string;
        
}
