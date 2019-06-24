import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("ipaccess",{schema:"redcobrosjp" } )
export class ipaccess extends BaseEntity {

    @Column("character varying",{ 
        nullable:true,
        primary: true,
        length:255,
        name:"ip"
        })
    ip:string | null;
        
}
