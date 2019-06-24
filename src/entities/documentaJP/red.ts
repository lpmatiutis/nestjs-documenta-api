import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {entidad_financiera} from "./entidad_financiera";
import {entidad} from "./entidad";
import {clearing_facturador} from "./clearing_facturador";
import {config_clearing_servicio} from "./config_clearing_servicio";
import {entidad_politica} from "./entidad_politica";
import {filtro_servicio} from "./filtro_servicio";
import {habilitacion_fact_red} from "./habilitacion_fact_red";
import {informacion} from "./informacion";
import {numero_ot} from "./numero_ot";
import {numero_ot2} from "./numero_ot2";
import {recaudador} from "./recaudador";
import {red_recaudador} from "./red_recaudador";
import {red_recaudador_numero_orden} from "./red_recaudador_numero_orden";


@Entity("red",{schema:"redcobrosjp" } )
export class red extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_red"
        })
    id_red:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"cod_era"
        })
    cod_era:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"cuenta_bcp_impuestos"
        })
    cuenta_bcp_impuestos:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"cuenta_bcp_otros_conceptos"
        })
    cuenta_bcp_otros_conceptos:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"cuenta_bcp_penalidades"
        })
    cuenta_bcp_penalidades:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"numero_cuenta"
        })
    numero_cuenta:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"numero_cuenta_procesador"
        })
    numero_cuenta_procesador:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"numero_orden_proximo"
        })
    numero_orden_proximo:string;
        

   
    @ManyToOne(type=>entidad_financiera, entidad_financiera=>entidad_financiera.reds,{  nullable:false, })
    @JoinColumn({ name:'banco_clearing'})
    bancoClearing:Promise<entidad_financiera | null>;

    @RelationId((red: red) => red.bancoClearing)
    bancoClearingId: Promise<string[]>;

   
    @ManyToOne(type=>entidad, entidad=>entidad.reds,{  nullable:false, })
    @JoinColumn({ name:'entidad'})
    entidad:Promise<entidad | null>;

    @RelationId((red: red) => red.entidad)
    entidadId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"numero_cuenta_iva"
        })
    numero_cuenta_iva:string | null;
        

   
    @OneToMany(type=>clearing_facturador, clearing_facturador=>clearing_facturador.red)
    clearingFacturadors:Promise<clearing_facturador[]>;
    

   
    @OneToMany(type=>config_clearing_servicio, config_clearing_servicio=>config_clearing_servicio.red)
    configClearingServicios:Promise<config_clearing_servicio[]>;
    

   
    @OneToMany(type=>entidad_politica, entidad_politica=>entidad_politica.red)
    entidadPoliticas:Promise<entidad_politica[]>;
    

   
    @OneToMany(type=>filtro_servicio, filtro_servicio=>filtro_servicio.idRed)
    filtroServicios:Promise<filtro_servicio[]>;
    

   
    @OneToMany(type=>habilitacion_fact_red, habilitacion_fact_red=>habilitacion_fact_red.red)
    habilitacionFactReds:Promise<habilitacion_fact_red[]>;
    

   
    @OneToMany(type=>informacion, informacion=>informacion.red)
    informacions:Promise<informacion[]>;
    

   
    @OneToMany(type=>numero_ot, numero_ot=>numero_ot.red)
    numeroOts:Promise<numero_ot[]>;
    

   
    @OneToMany(type=>numero_ot2, numero_ot2=>numero_ot2.red)
    numeroOts2:Promise<numero_ot2[]>;
    

   
    @OneToMany(type=>recaudador, recaudador=>recaudador.red)
    recaudadors:Promise<recaudador[]>;
    

   
    @OneToMany(type=>red_recaudador, red_recaudador=>red_recaudador.idRed)
    redRecaudadors:Promise<red_recaudador[]>;
    

   
    @OneToMany(type=>red_recaudador_numero_orden, red_recaudador_numero_orden=>red_recaudador_numero_orden.red)
    redRecaudadorNumeroOrdens:Promise<red_recaudador_numero_orden[]>;
    
}
