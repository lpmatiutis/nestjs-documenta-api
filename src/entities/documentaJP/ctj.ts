import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("ctj",{schema:"redcobrosjp" } )
export class ctj extends BaseEntity {

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"matricula"
        })
    matricula:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:20,
        name:"cuenta"
        })
    cuenta:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"cuota"
        })
    cuota:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:250,
        name:"nombre"
        })
    nombre:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"vencimiento"
        })
    vencimiento:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"mora"
        })
    mora:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"importe"
        })
    importe:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"cobrado"
        })
    cobrado:string | null;
        
}
