import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("da_aux",{schema:"redcobrosjp" } )
export class da_aux extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary: true,
        name:"campo1"
        })
    campo1:string;
        
}
