import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {localidad} from "./localidad";
import {cuenta_entidad} from "./cuenta_entidad";
import {entidad_financiera} from "./entidad_financiera";
import {entidad_politica} from "./entidad_politica";
import {facturador} from "./facturador";
import {recaudador} from "./recaudador";
import {red} from "./red";
import {usuario_entidad} from "./usuario_entidad";


@Entity("entidad",{schema:"redcobrosjp" } )
export class entidad extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_entidad"
        })
    id_entidad:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"direccion"
        })
    direccion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombre"
        })
    nombre:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"ruc_ci"
        })
    ruc_ci:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"telefono"
        })
    telefono:string | null;
        

   
    @ManyToOne(type=>localidad, localidad=>localidad.entidads,{  nullable:false,  eager: true, cascade: true})
    @JoinColumn({ name:'localidad'})
    //localidad:Promise<localidad | null>;
    localidad:localidad | null;

    //@RelationId((entidad: entidad) => entidad.localidad)
    //localidadId: Promise<string[]>;

   
    @OneToMany(type=>cuenta_entidad, cuenta_entidad=>cuenta_entidad.idEntidad)
    cuentaEntidads:Promise<cuenta_entidad[]>;
    

   
    @OneToMany(type=>entidad_financiera, entidad_financiera=>entidad_financiera.entidad)
    entidadFinancieras:Promise<entidad_financiera[]>;
    

   
    @OneToMany(type=>entidad_politica, entidad_politica=>entidad_politica.entidad)
    entidadPoliticas:Promise<entidad_politica[]>;
    

   
    @OneToMany(type=>facturador, facturador=>facturador.entidad)
    facturadors:Promise<facturador[]>;
    

   
    @OneToMany(type=>recaudador, recaudador=>recaudador.entidad)
    recaudadors:Promise<recaudador[]>;
    

   
    @OneToMany(type=>red, red=>red.entidad)
    reds:Promise<red[]>;
    

   
    @OneToMany(type=>usuario_entidad, usuario_entidad=>usuario_entidad.idEntidad)
    usuarioEntidads:Promise<usuario_entidad[]>;
    
}
