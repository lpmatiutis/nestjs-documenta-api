import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {gestion} from "./gestion";
import {servicio_rc} from "./servicio_rc";
import {estado_transaccion} from "./estado_transaccion";


@Entity("log_cobranza",{schema:"redcobrosjp" } )
export class log_cobranza extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_log_cobranza"
        })
    id_log_cobranza:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_transaccion"
        })
    id_transaccion:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_trx_recaudador"
        })
    id_trx_recaudador:string | null;
        

   
    @ManyToOne(type=>gestion, gestion=>gestion.logCobranzas,{  nullable:false, })
    @JoinColumn({ name:'id_gestion'})
    idGestion:Promise<gestion | null>;

    @RelationId((log_cobranza: log_cobranza) => log_cobranza.idGestion)
    idGestionId: Promise<string[]>;

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.logCobranzas,{  nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:Promise<servicio_rc | null>;

    @RelationId((log_cobranza: log_cobranza) => log_cobranza.idServicio)
    idServicioId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:true,
        length:150,
        name:"referencia_consulta"
        })
    referencia_consulta:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:300,
        name:"referencia_pago"
        })
    referencia_pago:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"monto"
        })
    monto:number;
        

    @Column("character",{ 
        nullable:true,
        name:"anulado"
        })
    anulado:string | null;
        

   
    @ManyToOne(type=>estado_transaccion, estado_transaccion=>estado_transaccion.logCobranzas,{  })
    @JoinColumn({ name:'id_estado_transaccion'})
    idEstadoTransaccion:Promise<estado_transaccion | null>;

    @RelationId((log_cobranza: log_cobranza) => log_cobranza.idEstadoTransaccion)
    idEstadoTransaccionId: Promise<number[]>;

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "LOCALTIMESTAMP",
        name:"fecha"
        })
    fecha:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1000,
        name:"respuesta_operacion"
        })
    respuesta_operacion:string | null;
        
}
