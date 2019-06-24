import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("chekamba",{schema:"redcobrosjp" } )
export class chekamba extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        length:12,
        default: () => "'NULL'",
        name:"vencimiento"
        })
    vencimiento:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:8,
        default: () => "'NULL'",
        name:"cuota"
        })
    cuota:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        default: () => "'NULL'",
        name:"saldo"
        })
    saldo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"cedula"
        })
    cedula:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"nombre"
        })
    nombre:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:30,
        name:"ref_pago"
        })
    ref_pago:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"tipo"
        })
    tipo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        default: () => "'N'",
        name:"pagado"
        })
    pagado:string | null;
        
}
