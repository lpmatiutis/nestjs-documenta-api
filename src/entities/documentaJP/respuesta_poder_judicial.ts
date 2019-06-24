import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("respuesta_poder_judicial",{schema:"redcobrosjp" } )
export class respuesta_poder_judicial extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_respuesta"
        })
    id_respuesta:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"descripcion"
        })
    descripcion:string | null;
        
}
