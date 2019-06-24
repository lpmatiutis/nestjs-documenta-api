import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tabla_temp3",{schema:"redcobrosjp" } )
export class tabla_temp3 extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary: true,
        name:"campo1"
        })
    campo1:string;
        
}
