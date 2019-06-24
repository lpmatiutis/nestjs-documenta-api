import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tiposervicioref",{schema:"reddepago" } )
export class tiposervicioref extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtiposervicioref"
        })
    idtiposervicioref:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        
}
