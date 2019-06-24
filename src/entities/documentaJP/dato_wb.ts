import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {log_wb} from "./log_wb";


@Entity("dato_wb",{schema:"redcobrosjp" } )
export class dato_wb extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:50,
        name:"ticket"
        })
    ticket:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"referencia"
        })
    referencia:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"servicio"
        })
    servicio:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"monto"
        })
    monto:number | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_operacion"
        })
    fecha_operacion:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_hora_ult_upd"
        })
    fecha_hora_ult_upd:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        default: () => "'P'",
        name:"estado"
        })
    estado:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:15,
        name:"ip"
        })
    ip:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"cod_autorizacion"
        })
    cod_autorizacion:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"transaccion_rc"
        })
    transaccion_rc:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"trx_seq"
        })
    trx_seq:string | null;
        

   
    @OneToMany(type=>log_wb, log_wb=>log_wb.ticket)
    logWbs:Promise<log_wb[]>;
    
}
