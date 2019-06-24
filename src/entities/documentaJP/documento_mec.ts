import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("documento_mec",{schema:"redcobrosjp" } )
export class documento_mec extends BaseEntity {

    @Column("smallint",{ 
        nullable:false,
        primary: true,
        name:"id_doc"
        })
    id_doc:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:200,
        name:"descripcion"
        })
    descripcion:string;
        
}
