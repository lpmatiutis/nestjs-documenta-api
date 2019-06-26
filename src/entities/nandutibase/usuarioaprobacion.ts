import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {usuario} from "./usuario";


@Entity("usuarioaprobacion",{schema:"base" } )
@Index("idx_usuarioaprobacion_correo",["correo","idcaracteristica",])
@Index("idx_uq_usuarioaprobacion_usuarioidcaracteristica",["idcaracteristica","idusuario",],{unique:true})
@Index("idx_uq_:usuarioaprobacion_nrocel",["idcaracteristica","nrocel",])
export class usuarioaprobacion extends BaseEntity {

   
    @ManyToOne(type=>usuario, usuario=>usuario.usuarioaprobacions,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idusuario'})
    idusuario:Promise<usuario | null>;

    @RelationId((usuarioaprobacion: usuarioaprobacion) => usuarioaprobacion.idusuario)
    idusuarioId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"idusuarioaprobacion"
        })
    idusuarioaprobacion:string;
        

    @Column("integer",{ 
        nullable:false,
        unique: true,
        default: () => "1",
        name:"idcaracteristica"
        })
    idcaracteristica:number;
        

    @Column("boolean",{ 
        nullable:false,
        name:"aprobacion"
        })
    aprobacion:boolean;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fechaactualizacion"
        })
    fechaactualizacion:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"claveacceso"
        })
    claveacceso:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fechanotif"
        })
    fechanotif:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"tiponotif"
        })
    tiponotif:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:150,
        name:"correo"
        })
    correo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"nrocel"
        })
    nrocel:string | null;
        
}
