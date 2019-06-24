import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cmcp",{schema:"redcobrosjp" } )
export class cmcp extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        length:15,
        name:"campo1"
        })
    campo1:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:5,
        name:"tipo_per"
        })
    tipo_per:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:5,
        name:"tipo_doc"
        })
    tipo_doc:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"referencia_consulta"
        })
    referencia_consulta:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:15,
        name:"tipo_ser"
        })
    tipo_ser:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:20,
        name:"referencia_pago"
        })
    referencia_pago:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:5,
        name:"moneda"
        })
    moneda:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:12,
        name:"monto"
        })
    monto:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"fec_ven"
        })
    fec_ven:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:12,
        name:"saldo_cap"
        })
    saldo_cap:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:5,
        name:"cod_ser"
        })
    cod_ser:string;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"pagado"
        })
    pagado:string;
        
}
