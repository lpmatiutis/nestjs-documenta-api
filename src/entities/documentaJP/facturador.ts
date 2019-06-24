import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {persona} from "./persona";
import {entidad} from "./entidad";
import {alias_servicio_facturador} from "./alias_servicio_facturador";
import {facturador_tasa} from "./facturador_tasa";
import {habilitacion_fact_red} from "./habilitacion_fact_red";
import {prefijo_facturador} from "./prefijo_facturador";
import {respuesta_carrier} from "./respuesta_carrier";
import {rn_facturador} from "./rn_facturador";
import {ruteo_servicio} from "./ruteo_servicio";
import {servicio} from "./servicio";
import {servicio_rc} from "./servicio_rc";


@Entity("facturador",{schema:"redcobrosjp" } )
export class facturador extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_facturador"
        })
    id_facturador:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"codigo"
        })
    codigo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @ManyToOne(type=>persona, persona=>persona.facturadors,{  })
    @JoinColumn({ name:'contacto'})
    contacto:Promise<persona | null>;

    @RelationId((facturador: facturador) => facturador.contacto)
    contactoId: Promise<string[]>;

   
    @ManyToOne(type=>entidad, entidad=>entidad.facturadors,{  nullable:false, eager:true, cascade:true})
    @JoinColumn({ name:'entidad'})
    entidad:entidad | null;
    //entidad:Promise<entidad | null>;

    //@RelationId((facturador: facturador) => facturador.entidad)
    //entidadId: Promise<string[]>;

   
    @OneToMany(type=>alias_servicio_facturador, alias_servicio_facturador=>alias_servicio_facturador.idFacturador)
    aliasServicioFacturadors:Promise<alias_servicio_facturador[]>;
    

   
    @OneToMany(type=>facturador_tasa, facturador_tasa=>facturador_tasa.facturador)
    facturadorTasas:Promise<facturador_tasa[]>;
    

   
    @OneToMany(type=>habilitacion_fact_red, habilitacion_fact_red=>habilitacion_fact_red.facturador)
    habilitacionFactReds:Promise<habilitacion_fact_red[]>;
    

   
    @OneToMany(type=>prefijo_facturador, prefijo_facturador=>prefijo_facturador.idFacturador)
    prefijoFacturadors:Promise<prefijo_facturador[]>;
    

   
    @OneToMany(type=>respuesta_carrier, respuesta_carrier=>respuesta_carrier.idFacturador)
    respuestaCarriers:Promise<respuesta_carrier[]>;
    

   
    @OneToMany(type=>rn_facturador, rn_facturador=>rn_facturador.idFacturador)
    rnFacturadors:Promise<rn_facturador[]>;
    

   
    @OneToOne(type=>ruteo_servicio, ruteo_servicio=>ruteo_servicio.idFacturador)
    ruteoServicio:Promise<ruteo_servicio | null>;


   
    @OneToMany(type=>servicio, servicio=>servicio.facturador)
    servicios:Promise<servicio[]>;
    

   
    @OneToMany(type=>servicio_rc, servicio_rc=>servicio_rc.idFacturador)
    servicioRcs:Promise<servicio_rc[]>;
    
}
