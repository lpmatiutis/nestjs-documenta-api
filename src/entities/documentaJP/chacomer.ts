import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("chacomer",{schema:"redcobrosjp" } )
export class chacomer extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"cuenta"
        })
    cuenta:string;
        

    @Column("smallint",{ 
        nullable:false,
        primary:true,
        name:"cuota"
        })
    cuota:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"nombre"
        })
    nombre:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:2,
        name:"concepto"
        })
    concepto:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:1,
        name:"serie"
        })
    serie:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:15,
        name:"documento"
        })
    documento:string;
        

    @Column("smallint",{ 
        nullable:false,
        name:"cant_cuota"
        })
    cant_cuota:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:3,
        name:"moneda"
        })
    moneda:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"saldo"
        })
    saldo:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"saldommnn"
        })
    saldommnn:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"fecha_vencimiento"
        })
    fecha_vencimiento:string;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"pagado"
        })
    pagado:string;
        
}
