import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {usuarionotificacion} from "./usuarionotificacion";


@Entity("tiponotificacion",{schema:"base" } )
export class tiponotificacion extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtiponotificacion"
        })
    idtiponotificacion:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:70,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"htmlicono"
        })
    htmlicono:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"htmlcolor"
        })
    htmlcolor:string | null;
        

   
    @OneToMany(type=>usuarionotificacion, usuarionotificacion=>usuarionotificacion.idtiponotificacion,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    usuarionotificacions:Promise<usuarionotificacion[]>;
    
}
