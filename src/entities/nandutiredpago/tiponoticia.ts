import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tiponoticia",{schema:"reddepago" } )
@Index("tiponoticia_codigo_key",["codigo",],{unique:true})
@Index("tiponoticia_descripcion_key",["descripcion",],{unique:true})
export class tiponoticia extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtiponoticia"
        })
    idtiponoticia:number;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:5,
        name:"codigo"
        })
    codigo:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        
}
