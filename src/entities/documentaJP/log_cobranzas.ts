import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {gestion} from "./gestion";
import {servicio_rc} from "./servicio_rc";


@Entity("log_cobranzas",{schema:"redcobrosjp" } )
@Index("uq_gestion_trx_recaudador",["idGestion","id_trx_recaudador",],{unique:true})
@Index("log_cobranzas_id_gestion_id_trx_recaudador_key",["idGestion","id_trx_recaudador",],{unique:true})
export class log_cobranzas extends BaseEntity {

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
        

   
    @ManyToOne(type=>gestion, gestion=>gestion.logCobranzass,{  nullable:false, })
    @JoinColumn({ name:'id_gestion'})
    idGestion:Promise<gestion | null>;

    @RelationId((log_cobranzas: log_cobranzas) => log_cobranzas.idGestion)
    idGestionId: Promise<string[]>;

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.logCobranzass,{  nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:Promise<servicio_rc | null>;

    @RelationId((log_cobranzas: log_cobranzas) => log_cobranzas.idServicio)
    idServicioId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:true,
        length:300,
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
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "LOCALTIMESTAMP",
        name:"fecha"
        })
    fecha:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "LOCALTIMESTAMP",
        name:"ultimo_reintento"
        })
    ultimo_reintento:Date | null;
        

    @Column("smallint",{ 
        nullable:true,
        default: () => "0",
        name:"reintentos"
        })
    reintentos:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1000,
        name:"respuesta_operacion"
        })
    respuesta_operacion:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"xml"
        })
    xml:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"dato_prueba"
        })
    dato_prueba:boolean | null;
        
}
