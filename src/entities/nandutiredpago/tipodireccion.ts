import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {direccion} from "./direccion";


@Entity("tipodireccion",{schema:"reddepago" } )
@Index("idx_uq_tipodireccion_codigo",["codigo",],{unique:true})
@Index("idx_uq_tipodireccion_descripcion",["descripcion",],{unique:true})
export class tipodireccion extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtipodireccion"
        })
    idtipodireccion:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:5,
        name:"codigo"
        })
    codigo:string;
        

   
    @OneToMany(type=>direccion, direccion=>direccion.idtipodireccion)
    direccions:Promise<direccion[]>;
    
}
