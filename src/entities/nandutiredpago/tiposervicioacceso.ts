import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tiposervicioacceso",{schema:"reddepago" } )
export class tiposervicioacceso extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"idtiposervicioacceso"
        })
    idtiposervicioacceso:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        
}
