import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("factory",{schema:"redcobrosjp" } )
export class factory extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_emisor"
        })
    id_emisor:string;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_liquidacion"
        })
    id_liquidacion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:6,
        name:"vencimiento1"
        })
    vencimiento1:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"importe1"
        })
    importe1:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:6,
        name:"vencimiento2"
        })
    vencimiento2:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"importe2"
        })
    importe2:string | null;
        

    @Column("character",{ 
        nullable:true,
        default: () => "'N'",
        name:"pagado"
        })
    pagado:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:6,
        name:"vencimiento3"
        })
    vencimiento3:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"importe3"
        })
    importe3:string | null;
        
}
