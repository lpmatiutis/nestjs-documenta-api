import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {localidad} from "./localidad";


@Entity("departamento",{schema:"base" } )
@Index("departamento_idx_uq_departamento_descripcion",["descripcion",],{unique:true})
export class departamento extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"iddepartamento"
        })
    iddepartamento:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @OneToMany(type=>localidad, localidad=>localidad.iddepartamento,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    localidads:Promise<localidad[]>;
    
}
