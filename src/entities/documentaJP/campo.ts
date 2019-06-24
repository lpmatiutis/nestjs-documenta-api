import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {formulario} from "./formulario";


@Entity("campo",{schema:"redcobrosjp" } )
export class campo extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_campo"
        })
    id_campo:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"cadena_campo"
        })
    cadena_campo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"etiqueta"
        })
    etiqueta:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"formula"
        })
    formula:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:2,
        name:"id_rubro"
        })
    id_rubro:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"inciso"
        })
    inciso:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:2,
        name:"mostrar_sugerencia"
        })
    mostrar_sugerencia:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero"
        })
    numero:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:2,
        name:"numero_columna"
        })
    numero_columna:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:2,
        name:"requerido"
        })
    requerido:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:2,
        name:"valido"
        })
    valido:string | null;
        

   
    @ManyToOne(type=>formulario, formulario=>formulario.campos,{  nullable:false, })
    @JoinColumn({ name:'formulario'})
    formulario:Promise<formulario | null>;

    @RelationId((campo: campo) => campo.formulario)
    formularioId: Promise<string[]>;

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"tipo"
        })
    tipo:string;
        
}
