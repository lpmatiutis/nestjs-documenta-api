import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("contiwallet_estados",{schema:"redcobrosjp" } )
export class contiwallet_estados extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_estado"
        })
    id_estado:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:50,
        name:"descripcion"
        })
    descripcion:string;
        
}
