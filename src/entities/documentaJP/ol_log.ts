import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {ol_map_log} from "./ol_map_log";


@Entity("ol_log",{schema:"redcobrosjp" } )
@Index("ol_log_trx_idx",["transaccion",])
export class ol_log extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_ol_log"
        })
    id_ol_log:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"transaccion"
        })
    transaccion:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"anulacion"
        })
    anulacion:string | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"tipo_operacion"
        })
    tipo_operacion:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"servicio"
        })
    servicio:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"referencia"
        })
    referencia:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"monto"
        })
    monto:number | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"forma_captura"
        })
    forma_captura:number | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"forma_pago"
        })
    forma_pago:number | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_operacion"
        })
    fecha_operacion:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"usuario"
        })
    usuario:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"gestion"
        })
    gestion:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"posicion_gestion"
        })
    posicion_gestion:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"terminal"
        })
    terminal:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"recaudador"
        })
    recaudador:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"respuesta"
        })
    respuesta:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_respuesta"
        })
    fecha_respuesta:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"cod_autorizacion"
        })
    cod_autorizacion:string | null;
        

   
    @OneToMany(type=>ol_map_log, ol_map_log=>ol_map_log.olLog)
    olMapLogs:Promise<ol_map_log[]>;
    
}
