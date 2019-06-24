import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("temp_copaco",{schema:"redcobrosjp" } )
export class temp_copaco extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary: true,
        name:"factura"
        })
    factura:string;
        
}
