import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {log_transaccion_rc} from "./log_transaccion_rc";
import {servicio_rc} from "./servicio_rc";


@Entity("detalle_consulta",{schema:"redcobrosjp" } )
export class detalle_consulta extends BaseEntity {

   
    @ManyToOne(type=>log_transaccion_rc, log_transaccion_rc=>log_transaccion_rc.detalleConsultas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_log_transaccion_rc'})
    idLogTransaccionRc:Promise<log_transaccion_rc | null>;

    @RelationId((detalle_consulta: detalle_consulta) => detalle_consulta.idLogTransaccionRc)
    idLogTransaccionRcId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:30,
        name:"referencia_pago"
        })
    referencia_pago:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"monto"
        })
    monto:number;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"acumulado"
        })
    acumulado:number;
        

    @Column("smallint",{ 
        nullable:false,
        name:"tipo_acumulado"
        })
    tipo_acumulado:number;
        

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.detalleConsultas,{  nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:Promise<servicio_rc | null>;

    @RelationId((detalle_consulta: detalle_consulta) => detalle_consulta.idServicio)
    idServicioId: Promise<number[]>;
}
