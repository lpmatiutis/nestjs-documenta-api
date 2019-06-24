import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("credicity_cab",{schema:"redcobrosjp" } )
export class credicity_cab extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary: true,
        length:20,
        name:"nrodoc"
        })
    nrodoc:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:260,
        name:"nombre"
        })
    nombre:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"date_insert"
        })
    date_insert:Date | null;
        
}
