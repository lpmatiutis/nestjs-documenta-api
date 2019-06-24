import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {entidad_financiera} from "./entidad_financiera";
import {estado_transaccion} from "./estado_transaccion";
import {gestion} from "./gestion";
import {moneda} from "./moneda";
import {tipo_pago} from "./tipo_pago";
import {boleta_pago_contrib} from "./boleta_pago_contrib";
import {dato_adicional_set} from "./dato_adicional_set";
import {form_contrib} from "./form_contrib";
import {log_historico_trans} from "./log_historico_trans";
import {ticket_impuesto} from "./ticket_impuesto";
import {transaccion_clubcajero} from "./transaccion_clubcajero";
import {transaccion_hb} from "./transaccion_hb";


@Entity("transaccion",{schema:"redcobrosjp" } )
export class transaccion extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_transaccion"
        })
    id_transaccion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"certificacion"
        })
    certificacion:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"codigo_transaccional"
        })
    codigo_transaccional:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"comentario"
        })
    comentario:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_cheque"
        })
    fecha_cheque:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora_red"
        })
    fecha_hora_red:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora_sistema"
        })
    fecha_hora_sistema:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora_terminal"
        })
    fecha_hora_terminal:Date;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"flag_anulado"
        })
    flag_anulado:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"monto_total"
        })
    monto_total:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"numero_cheque"
        })
    numero_cheque:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"posicion_gestion"
        })
    posicion_gestion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"ticket"
        })
    ticket:string | null;
        

   
    @ManyToOne(type=>entidad_financiera, entidad_financiera=>entidad_financiera.transaccions,{  })
    @JoinColumn({ name:'entidad_financiera'})
    entidadFinanciera:Promise<entidad_financiera | null>;

    @RelationId((transaccion: transaccion) => transaccion.entidadFinanciera)
    entidadFinancieraId: Promise<string[]>;

   
    @ManyToOne(type=>estado_transaccion, estado_transaccion=>estado_transaccion.transaccions,{  nullable:false, })
    @JoinColumn({ name:'estado_transaccion'})
    estadoTransaccion:Promise<estado_transaccion | null>;

    @RelationId((transaccion: transaccion) => transaccion.estadoTransaccion)
    estadoTransaccionId: Promise<string[]>;

   
    @ManyToOne(type=>gestion, gestion=>gestion.transaccions,{  nullable:false, })
    @JoinColumn({ name:'gestion'})
    gestion:Promise<gestion | null>;

    @RelationId((transaccion: transaccion) => transaccion.gestion)
    gestionId: Promise<string[]>;

   
    @ManyToOne(type=>moneda, moneda=>moneda.transaccions,{  nullable:false, })
    @JoinColumn({ name:'moneda'})
    moneda:Promise<moneda | null>;

    @RelationId((transaccion: transaccion) => transaccion.moneda)
    monedaId: Promise<string[]>;

   
    @ManyToOne(type=>tipo_pago, tipo_pago=>tipo_pago.transaccions,{  })
    @JoinColumn({ name:'tipo_pago'})
    tipoPago:Promise<tipo_pago | null>;

    @RelationId((transaccion: transaccion) => transaccion.tipoPago)
    tipoPagoId: Promise<string[]>;

    @Column("character",{ 
        nullable:true,
        default: () => "'N'",
        name:"migrado"
        })
    migrado:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"fecha_acreditacion"
        })
    fecha_acreditacion:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_corte"
        })
    id_corte:string | null;
        

   
    @OneToOne(type=>boleta_pago_contrib, boleta_pago_contrib=>boleta_pago_contrib.transaccion)
    boletaPagoContrib:Promise<boleta_pago_contrib | null>;


   
    @OneToOne(type=>dato_adicional_set, dato_adicional_set=>dato_adicional_set.idTransaccion)
    datoAdicionalSet:Promise<dato_adicional_set | null>;


   
    @OneToMany(type=>form_contrib, form_contrib=>form_contrib.transaccion)
    formContribs:Promise<form_contrib[]>;
    

   
    @OneToMany(type=>log_historico_trans, log_historico_trans=>log_historico_trans.transaccion)
    logHistoricoTranss:Promise<log_historico_trans[]>;
    

   
    @OneToMany(type=>ticket_impuesto, ticket_impuesto=>ticket_impuesto.idTransaccion)
    ticketImpuestos:Promise<ticket_impuesto[]>;
    

   
    @OneToOne(type=>transaccion_clubcajero, transaccion_clubcajero=>transaccion_clubcajero.idtransaccionset,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transaccionClubcajero:Promise<transaccion_clubcajero | null>;


   
    @OneToOne(type=>transaccion_hb, transaccion_hb=>transaccion_hb.idtransaccionset,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transaccionHb:Promise<transaccion_hb | null>;

}
