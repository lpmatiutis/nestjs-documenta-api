import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transaccion_rc} from "./transaccion_rc";
import {servicio_rc} from "./servicio_rc";
import {gestion} from "./gestion";
import {patron_pagina} from "./patron_pagina";
import {tipo_operacion} from "./tipo_operacion";
import {tipo_captura} from "./tipo_captura";
import {moneda} from "./moneda";
import {detalle_consulta} from "./detalle_consulta";


@Entity("log_transaccion_rc",{schema:"redcobrosjp" } )
export class log_transaccion_rc extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_log_transaccion_rc"
        })
    id_log_transaccion_rc:string;
        

   
    @ManyToOne(type=>transaccion_rc, transaccion_rc=>transaccion_rc.logTransaccionRcs,{  })
    @JoinColumn({ name:'id_transaccion'})
    idTransaccion:Promise<transaccion_rc | null>;

    @RelationId((log_transaccion_rc: log_transaccion_rc) => log_transaccion_rc.idTransaccion)
    idTransaccionId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"referencia_pago"
        })
    referencia_pago:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"monto"
        })
    monto:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:600,
        name:"mensaje"
        })
    mensaje:string | null;
        

    @Column("smallint",{ 
        nullable:false,
        name:"error"
        })
    error:number;
        

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.logTransaccionRcs,{  })
    @JoinColumn({ name:'id_servicio'})
    idServicio:Promise<servicio_rc | null>;

    @RelationId((log_transaccion_rc: log_transaccion_rc) => log_transaccion_rc.idServicio)
    idServicioId: Promise<number[]>;

   
    @ManyToOne(type=>gestion, gestion=>gestion.logTransaccionRcs,{  })
    @JoinColumn({ name:'id_gestion'})
    idGestion:Promise<gestion | null>;

    @RelationId((log_transaccion_rc: log_transaccion_rc) => log_transaccion_rc.idGestion)
    idGestionId: Promise<string[]>;

   
    @ManyToOne(type=>patron_pagina, patron_pagina=>patron_pagina.logTransaccionRcs,{  })
    @JoinColumn({ name:'id_patron'})
    idPatron:Promise<patron_pagina | null>;

    @RelationId((log_transaccion_rc: log_transaccion_rc) => log_transaccion_rc.idPatron)
    idPatronId: Promise<number[]>;

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_ingreso"
        })
    fecha_ingreso:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_termino"
        })
    fecha_termino:Date | null;
        

   
    @ManyToOne(type=>tipo_operacion, tipo_operacion=>tipo_operacion.logTransaccionRcs,{  })
    @JoinColumn({ name:'id_tipo_operacion'})
    idTipoOperacion:Promise<tipo_operacion | null>;

    @RelationId((log_transaccion_rc: log_transaccion_rc) => log_transaccion_rc.idTipoOperacion)
    idTipoOperacionId: Promise<number[]>;

   
    @ManyToOne(type=>tipo_captura, tipo_captura=>tipo_captura.logTransaccionRcs,{  })
    @JoinColumn({ name:'id_tipo_captura'})
    idTipoCaptura:Promise<tipo_captura | null>;

    @RelationId((log_transaccion_rc: log_transaccion_rc) => log_transaccion_rc.idTipoCaptura)
    idTipoCapturaId: Promise<number[]>;

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"comision"
        })
    comision:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"adicional"
        })
    adicional:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"tasa"
        })
    tasa:number | null;
        

   
    @ManyToOne(type=>moneda, moneda=>moneda.logTransaccionRcs,{  })
    @JoinColumn({ name:'moneda'})
    moneda:Promise<moneda | null>;

    @RelationId((log_transaccion_rc: log_transaccion_rc) => log_transaccion_rc.moneda)
    monedaId: Promise<number[]>;

   
    @OneToMany(type=>detalle_consulta, detalle_consulta=>detalle_consulta.idLogTransaccionRc)
    detalleConsultas:Promise<detalle_consulta[]>;
    
}
