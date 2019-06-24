import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {terminal} from "./terminal";
import {usuario} from "./usuario";
import {gestion_audit} from "./gestion_audit";
import {grupo} from "./grupo";
import {log_cobranza} from "./log_cobranza";
import {log_cobranzas} from "./log_cobranzas";
import {log_transaccion_rc} from "./log_transaccion_rc";
import {transaccion} from "./transaccion";
import {transaccion_rc} from "./transaccion_rc";


@Entity("gestion",{schema:"redcobrosjp" } )
@Index("gestion_terminal_idx",["terminal",])
@Index("gestion_usuario_idx",["usuario",])
export class gestion extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_gestion"
        })
    id_gestion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"cerrado"
        })
    cerrado:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fec_hora_ult_update"
        })
    fec_hora_ult_update:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_apertura"
        })
    fecha_apertura:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_cierre"
        })
    fecha_cierre:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"hora_apertura"
        })
    hora_apertura:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"hora_cierre"
        })
    hora_cierre:Date | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"nro_gestion"
        })
    nro_gestion:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"proxima_posicion"
        })
    proxima_posicion:string;
        

   
    @ManyToOne(type=>terminal, terminal=>terminal.gestions,{  nullable:false, })
    @JoinColumn({ name:'terminal'})
    terminal:Promise<terminal | null>;

    @RelationId((gestion: gestion) => gestion.terminal)
    terminalId: Promise<string[]>;

   
    @ManyToOne(type=>usuario, usuario=>usuario.gestions,{  nullable:false, })
    @JoinColumn({ name:'usuario'})
    usuario:Promise<usuario | null>;

    @RelationId((gestion: gestion) => gestion.usuario)
    usuarioId: Promise<string[]>;

    @Column("character",{ 
        nullable:true,
        name:"migrado"
        })
    migrado:string | null;
        

   
    @OneToMany(type=>gestion_audit, gestion_audit=>gestion_audit.idGestion)
    gestionAudits:Promise<gestion_audit[]>;
    

   
    @OneToMany(type=>grupo, grupo=>grupo.gestion)
    grupos:Promise<grupo[]>;
    

   
    @OneToMany(type=>log_cobranza, log_cobranza=>log_cobranza.idGestion)
    logCobranzas:Promise<log_cobranza[]>;
    

   
    @OneToMany(type=>log_cobranzas, log_cobranzas=>log_cobranzas.idGestion)
    logCobranzass:Promise<log_cobranzas[]>;
    

   
    @OneToMany(type=>log_transaccion_rc, log_transaccion_rc=>log_transaccion_rc.idGestion)
    logTransaccionRcs:Promise<log_transaccion_rc[]>;
    

   
    @OneToMany(type=>transaccion, transaccion=>transaccion.gestion)
    transaccions:Promise<transaccion[]>;
    

   
    @OneToMany(type=>transaccion_rc, transaccion_rc=>transaccion_rc.idGestion)
    transaccionRcs:Promise<transaccion_rc[]>;
    
}
