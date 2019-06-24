import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {contribuyentes} from "./contribuyentes";
import {form_contrib} from "./form_contrib";
import {grupo} from "./grupo";
import {impuesto} from "./impuesto";
import {numero_ot} from "./numero_ot";
import {transaccion} from "./transaccion";
import {numero_ot2} from "./numero_ot2";


@Entity("boleta_pago_contrib",{schema:"redcobrosjp" } )
@Index("boleta_pago_contrib_transaccion_key",["transaccion",],{unique:true})
export class boleta_pago_contrib extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_boleta_pago_contrib"
        })
    id_boleta_pago_contrib:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"codigo_hash"
        })
    codigo_hash:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"consecutivo"
        })
    consecutivo:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_cobro"
        })
    fecha_cobro:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora_recepcion"
        })
    fecha_hora_recepcion:Date;
        

    @Column("bigint",{ 
        nullable:false,
        name:"formulario"
        })
    formulario:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"numero_orden"
        })
    numero_orden:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_resolucion"
        })
    numero_resolucion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"periodo"
        })
    periodo:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"pos_grupo"
        })
    pos_grupo:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"total"
        })
    total:number;
        

    @Column("bigint",{ 
        nullable:false,
        name:"version"
        })
    version:string;
        

   
    @ManyToOne(type=>contribuyentes, contribuyentes=>contribuyentes.boletaPagoContribs,{  nullable:false, })
    @JoinColumn({ name:'contribuyente'})
    contribuyente:Promise<contribuyentes | null>;

    @RelationId((boleta_pago_contrib: boleta_pago_contrib) => boleta_pago_contrib.contribuyente)
    contribuyenteId: Promise<string[]>;

   
    @ManyToOne(type=>form_contrib, form_contrib=>form_contrib.boletaPagoContribs,{  })
    @JoinColumn({ name:'form_contrib'})
    formContrib:Promise<form_contrib | null>;

    @RelationId((boleta_pago_contrib: boleta_pago_contrib) => boleta_pago_contrib.formContrib)
    formContribId: Promise<string[]>;

   
    @ManyToOne(type=>grupo, grupo=>grupo.boletaPagoContribs,{  nullable:false, })
    @JoinColumn({ name:'grupo'})
    grupo:Promise<grupo | null>;

    @RelationId((boleta_pago_contrib: boleta_pago_contrib) => boleta_pago_contrib.grupo)
    grupoId: Promise<string[]>;

   
    @ManyToOne(type=>impuesto, impuesto=>impuesto.boletaPagoContribs,{  nullable:false, })
    @JoinColumn({ name:'impuesto'})
    impuesto:Promise<impuesto | null>;

    @RelationId((boleta_pago_contrib: boleta_pago_contrib) => boleta_pago_contrib.impuesto)
    impuestoId: Promise<string[]>;

   
    @ManyToOne(type=>numero_ot, numero_ot=>numero_ot.boletaPagoContribs,{  })
    @JoinColumn({ name:'numero_ot'})
    numeroOt:Promise<numero_ot | null>;

    @RelationId((boleta_pago_contrib: boleta_pago_contrib) => boleta_pago_contrib.numeroOt)
    numeroOtId: Promise<string[]>;

   
    @OneToOne(type=>transaccion, transaccion=>transaccion.boletaPagoContrib,{  nullable:false, })
    @JoinColumn({ name:'transaccion'})
    transaccion:Promise<transaccion | null>;

    @RelationId((boleta_pago_contrib: boleta_pago_contrib) => boleta_pago_contrib.transaccion)
    transaccionId: Promise<string>;

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"ruc"
        })
    ruc:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"dv"
        })
    dv:string | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"flg_pago_online"
        })
    flg_pago_online:number | null;
        

   
    @ManyToOne(type=>numero_ot2, numero_ot2=>numero_ot2.boletaPagoContribs,{  })
    @JoinColumn({ name:'numero_ot2'})
    numeroOt2:Promise<numero_ot2 | null>;

    @RelationId((boleta_pago_contrib: boleta_pago_contrib) => boleta_pago_contrib.numeroOt2)
    numeroOt2Id: Promise<string[]>;
}
