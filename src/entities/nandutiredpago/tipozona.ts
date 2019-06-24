import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {direccion} from "./direccion";


@Entity("tipozona",{schema:"reddepago" } )
@Index("tipozona_descripcion_key",["descripcion",],{unique:true})
export class tipozona extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idtipozona"
        })
    idtipozona:number;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"codigo"
        })
    codigo:string | null;
        

   
    @OneToMany(type=>direccion, direccion=>direccion.idtipozona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    direccions:Promise<direccion[]>;
    
}
