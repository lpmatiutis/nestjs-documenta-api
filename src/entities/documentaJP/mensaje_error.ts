import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("mensaje_error",{schema:"redcobrosjp" } )
export class mensaje_error extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_mensaje_error"
        })
    id_mensaje_error:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion"
        })
    descripcion:string | null;
        
}
