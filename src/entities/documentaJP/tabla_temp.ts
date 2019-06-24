import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tabla_temp",{schema:"redcobrosjp" } )
export class tabla_temp extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"campo1"
        })
    campo1:string;
        
}
