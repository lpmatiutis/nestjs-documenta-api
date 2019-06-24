import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {log_historico_trans} from "./log_historico_trans";


@Entity("log_historico",{schema:"redcobrosjp" } )
export class log_historico extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_log_historico"
        })
    id_log_historico:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"codigo_transaccional"
        })
    codigo_transaccional:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora"
        })
    fecha_hora:Date;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"fecha_hora_red"
        })
    fecha_hora_red:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"fecha_hora_terminal"
        })
    fecha_hora_terminal:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_tipo_moneda"
        })
    id_tipo_moneda:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_tipo_pago"
        })
    id_tipo_pago:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"mensaje"
        })
    mensaje:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"monto"
        })
    monto:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"nombre_usuario"
        })
    nombre_usuario:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"recaudador"
        })
    recaudador:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"red"
        })
    red:string | null;
        

    @Column("character",{ 
        nullable:false,
        name:"sentido"
        })
    sentido:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"sucursal"
        })
    sucursal:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"tasa_cambio"
        })
    tasa_cambio:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"terminal"
        })
    terminal:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"tipo_terminal"
        })
    tipo_terminal:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"transaccion"
        })
    transaccion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"usuario"
        })
    usuario:string | null;
        

   
    @ManyToOne(type=>log_historico_trans, log_historico_trans=>log_historico_trans.logHistoricos,{  nullable:false, })
    @JoinColumn({ name:'id_log_historico_trans'})
    idLogHistoricoTrans:Promise<log_historico_trans | null>;

    @RelationId((log_historico: log_historico) => log_historico.idLogHistoricoTrans)
    idLogHistoricoTransId: Promise<string[]>;
}
