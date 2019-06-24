import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cable_vision2",{schema:"redcobrosjp" } )
export class cable_vision2 extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary: true,
        name:"numero_cliente"
        })
    numero_cliente:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"numero_factura"
        })
    numero_factura:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:42,
        name:"nombre_cliente"
        })
    nombre_cliente:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"primer_vencimiento"
        })
    primer_vencimiento:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"importe_primer_vencimiento"
        })
    importe_primer_vencimiento:string;
        

    @Column("smallint",{ 
        nullable:false,
        name:"tipo_cupon_primer_vencimiento"
        })
    tipo_cupon_primer_vencimiento:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"segundo_vencimiento"
        })
    segundo_vencimiento:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"importe_segundo_vencimiento"
        })
    importe_segundo_vencimiento:string;
        

    @Column("smallint",{ 
        nullable:false,
        name:"tipo_cupon_segundo_vencimiento"
        })
    tipo_cupon_segundo_vencimiento:number;
        

    @Column("character",{ 
        nullable:false,
        name:"pagado"
        })
    pagado:string;
        

    @Column("character",{ 
        nullable:false,
        length:3,
        name:"cod_empresa"
        })
    cod_empresa:string;
        
}
