import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cod_aut_telefonias",{schema:"redcobrosjp" } )
export class cod_aut_telefonias extends BaseEntity {

    @Column("character varying",{ 
        nullable:true,
        primary: true,
        length:20,
        name:"cod_aut"
        })
    cod_aut:string | null;
        
}
