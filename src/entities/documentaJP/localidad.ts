import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {ciudad} from "./ciudad";
import {entidad} from "./entidad";
import {estudio_contable} from "./estudio_contable";
import {gestor_direcciones} from "./gestor_direcciones";
import {persona} from "./persona";
import {sucursal} from "./sucursal";


@Entity("localidad",{schema:"redcobrosjp" } )
export class localidad extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_localidad"
        })
    id_localidad:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombre"
        })
    nombre:string;
        

   
    @ManyToOne(type=>ciudad, ciudad=>ciudad.localidads,{  nullable:false, })
    @JoinColumn({ name:'ciudad'})
    ciudad:Promise<ciudad | null>;

    @RelationId((localidad: localidad) => localidad.ciudad)
    ciudadId: Promise<string[]>;

   
    @OneToMany(type=>entidad, entidad=>entidad.localidad)
    entidads:Promise<entidad[]>;
    

   
    @OneToMany(type=>estudio_contable, estudio_contable=>estudio_contable.localidad)
    estudioContables:Promise<estudio_contable[]>;
    

   
    @OneToMany(type=>gestor_direcciones, gestor_direcciones=>gestor_direcciones.localidad)
    gestorDireccioness:Promise<gestor_direcciones[]>;
    

   
    @OneToMany(type=>persona, persona=>persona.localidad)
    personas:Promise<persona[]>;
    

   
    @OneToMany(type=>sucursal, sucursal=>sucursal.localidad)
    sucursals:Promise<sucursal[]>;
    
}
