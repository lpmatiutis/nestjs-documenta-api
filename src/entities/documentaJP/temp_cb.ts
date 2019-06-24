import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("temp_cb",{schema:"redcobrosjp" } )
export class temp_cb extends BaseEntity {

    @Column("character varying",{ 
        nullable:true,
        primary: true,
        length:20,
        name:"ruc"
        })
    ruc:string | null;
        
}
