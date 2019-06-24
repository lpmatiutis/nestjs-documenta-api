import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tipoestadoservicio",{schema:"reddepago" } )
@Index("idx_uq_tipoestadoservicio_codigo",["codigo",],{unique:true})
@Index("idx_uq_tipoestadoservicio_descripcion",["descripcion",],{unique:true})
export class tipoestadoservicio extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtipoestadoservicio"
        })
    idtipoestadoservicio:number;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:true,
        unique: true,
        length:5,
        name:"codigo"
        })
    codigo:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"obs"
        })
    obs:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"css"
        })
    css:string;
        
}
