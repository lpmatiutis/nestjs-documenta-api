import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {usuario} from "./usuario";
import {tiponotificacion} from "./tiponotificacion";


@Entity("usuarionotificacion",{schema:"base" } )
@Index("usuarionotificacion_idusuarionotificacion_key",["idusuarionotificacion",],{unique:true})
export class usuarionotificacion extends BaseEntity {

   
    @ManyToOne(type=>usuario, usuario=>usuario.usuarionotificacions,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idusuario'})
    idusuario:Promise<usuario | null>;

    @RelationId((usuarionotificacion: usuarionotificacion) => usuarionotificacion.idusuario)
    idusuarioId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"integer", 
        //unique: true,
        name:"idusuarionotificacion"
        })
    idusuarionotificacion:number;
        

   
    @ManyToOne(type=>tiponotificacion, tiponotificacion=>tiponotificacion.usuarionotificacions,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtiponotificacion'})
    idtiponotificacion:Promise<tiponotificacion | null>;

    @RelationId((usuarionotificacion: usuarionotificacion) => usuarionotificacion.idtiponotificacion)
    idtiponotificacionId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:false,
        length:50,
        name:"titulo"
        })
    titulo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:70,
        name:"subtitulo"
        })
    subtitulo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:150,
        name:"mensaje"
        })
    mensaje:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:150,
        name:"messagelink"
        })
    messagelink:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"recursoimg"
        })
    recursoimg:string | null;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "1",
        name:"cantidadvista"
        })
    cantidadvista:number;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "0",
        name:"cantidadvistaactual"
        })
    cantidadvistaactual:number;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "45",
        name:"intervalo"
        })
    intervalo:number;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecinicio"
        })
    fecinicio:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecfin"
        })
    fecfin:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"feclastnotif"
        })
    feclastnotif:Date | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        
}
