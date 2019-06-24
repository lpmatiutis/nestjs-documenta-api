import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("paratronic",{schema:"redcobrosjp" } )
export class paratronic extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        length:150,
        name:"nombre_cliente"
        })
    nombre_cliente:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"nro_ci"
        })
    nro_ci:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:2,
        name:"fi"
        })
    fi:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:2,
        name:"ci"
        })
    ci:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"cod_cliente"
        })
    cod_cliente:string;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"nro_doc"
        })
    nro_doc:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:2,
        name:"sigla"
        })
    sigla:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"saldo"
        })
    saldo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:8,
        name:"vencimiento"
        })
    vencimiento:string;
        

    @Column("smallint",{ 
        nullable:true,
        name:"compute"
        })
    compute:number | null;
        

    @Column("character",{ 
        nullable:true,
        name:"i"
        })
    i:string | null;
        

    @Column("smallint",{ 
        nullable:false,
        primary:true,
        name:"nro_cuota"
        })
    nro_cuota:number;
        

    @Column("character",{ 
        nullable:true,
        name:"pagado"
        })
    pagado:string | null;
        
}
