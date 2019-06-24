import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {estudio_contable} from "./estudio_contable";
import {recaudador} from "./recaudador";


@Entity("gestor",{schema:"redcobrosjp" } )
export class gestor extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombre"
        })
    nombre:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"apellido"
        })
    apellido:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:25,
        name:"tipo_gestor"
        })
    tipo_gestor:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_nacimiento"
        })
    fecha_nacimiento:Date;
        

    @Column("character varying",{ 
        nullable:false,
        length:25,
        name:"sexo"
        })
    sexo:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"sugerido"
        })
    sugerido:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:25,
        name:"cedula"
        })
    cedula:string;
        

    @Column("character",{ 
        nullable:true,
        default: () => "'N'",
        name:"remitido"
        })
    remitido:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"nombre_usuario"
        })
    nombre_usuario:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"contrasenha"
        })
    contrasenha:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:1,
        name:"activo"
        })
    activo:string;
        

   
    @ManyToOne(type=>estudio_contable, estudio_contable=>estudio_contable.gestors,{  })
    @JoinColumn({ name:'estudio_contable'})
    estudioContable:Promise<estudio_contable | null>;

    @RelationId((gestor: gestor) => gestor.estudioContable)
    estudioContableId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:false,
        length:1,
        default: () => "'N'",
        name:"administrador"
        })
    administrador:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"caracter"
        })
    caracter:string;
        

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.gestors,{  })
    @JoinColumn({ name:'recaudador'})
    recaudador:Promise<recaudador | null>;

    @RelationId((gestor: gestor) => gestor.recaudador)
    recaudadorId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"permitir_anular"
        })
    permitir_anular:string | null;
        
}
