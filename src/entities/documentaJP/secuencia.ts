import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("secuencia",{schema:"redcobrosjp" } )
export class secuencia extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:255,
        name:"nombre"
        })
    nombre:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"actual"
        })
    actual:string | null;
        
}
