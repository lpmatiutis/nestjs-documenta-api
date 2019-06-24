import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {persona} from "./persona";
import {localidad} from "./localidad";
import {gestor} from "./gestor";


@Entity("estudio_contable",{schema:"redcobrosjp" } )
export class estudio_contable extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_estudio_contable"
        })
    id_estudio_contable:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombre"
        })
    nombre:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"direccion"
        })
    direccion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"telefono_1"
        })
    telefono_1:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"telefono_2"
        })
    telefono_2:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"email"
        })
    email:string;
        

   
    @ManyToOne(type=>persona, persona=>persona.estudioContables,{  nullable:false, })
    @JoinColumn({ name:'contacto'})
    contacto:Promise<persona | null>;

    @RelationId((estudio_contable: estudio_contable) => estudio_contable.contacto)
    contactoId: Promise<string[]>;

   
    @ManyToOne(type=>localidad, localidad=>localidad.estudioContables,{  nullable:false, })
    @JoinColumn({ name:'localidad'})
    localidad:Promise<localidad | null>;

    @RelationId((estudio_contable: estudio_contable) => estudio_contable.localidad)
    localidadId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"ruc"
        })
    ruc:string;
        

   
    @OneToMany(type=>gestor, gestor=>gestor.estudioContable)
    gestors:Promise<gestor[]>;
    
}
