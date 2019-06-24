import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {localidad} from "./localidad";
import {entidad_financiera} from "./entidad_financiera";
import {estudio_contable} from "./estudio_contable";
import {facturador} from "./facturador";
import {recaudador} from "./recaudador";
import {sucursal} from "./sucursal";
import {usuario} from "./usuario";


@Entity("persona",{schema:"redcobrosjp" } )
export class persona extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_persona"
        })
    id_persona:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"apellidos"
        })
    apellidos:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"direccion"
        })
    direccion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombres"
        })
    nombres:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"ruc_ci"
        })
    ruc_ci:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"telefono"
        })
    telefono:string;
        

   
    @ManyToOne(type=>localidad, localidad=>localidad.personas,{  nullable:false, })
    @JoinColumn({ name:'localidad'})
    localidad:Promise<localidad | null>;

    @RelationId((persona: persona) => persona.localidad)
    localidadId: Promise<string[]>;

   
    @OneToMany(type=>entidad_financiera, entidad_financiera=>entidad_financiera.contacto)
    entidadFinancieras:Promise<entidad_financiera[]>;
    

   
    @OneToMany(type=>estudio_contable, estudio_contable=>estudio_contable.contacto)
    estudioContables:Promise<estudio_contable[]>;
    

   
    @OneToMany(type=>facturador, facturador=>facturador.contacto)
    facturadors:Promise<facturador[]>;
    

   
    @OneToMany(type=>recaudador, recaudador=>recaudador.contacto)
    recaudadors:Promise<recaudador[]>;
    

   
    @OneToMany(type=>sucursal, sucursal=>sucursal.contacto)
    sucursals:Promise<sucursal[]>;
    

   
    @OneToMany(type=>usuario, usuario=>usuario.persona)
    usuarios:Promise<usuario[]>;
    
}
