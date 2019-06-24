import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("bristol",{schema:"redcobrosjp" } )
export class bristol extends BaseEntity {

    @Column("character varying",{ 
        nullable:true,
        length:2,
        name:"sucursal"
        })
    sucursal:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:4,
        name:"comprobante"
        })
    comprobante:string;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"nro_factura"
        })
    nro_factura:string;
        

    @Column("smallint",{ 
        nullable:false,
        primary:true,
        name:"cuota_nro"
        })
    cuota_nro:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"vencimiento"
        })
    vencimiento:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:2,
        name:"moneda"
        })
    moneda:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"saldo"
        })
    saldo:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"int_x_dia"
        })
    int_x_dia:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:8,
        name:"cod_cliente"
        })
    cod_cliente:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:15,
        name:"cedula"
        })
    cedula:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:150,
        name:"nombre"
        })
    nombre:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:8,
        name:"calificacion"
        })
    calificacion:string | null;
        

    @Column("character",{ 
        nullable:true,
        default: () => "'N'",
        name:"pagado"
        })
    pagado:string | null;
        
}
