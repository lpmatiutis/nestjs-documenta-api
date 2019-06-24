import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {log_cobranza} from "./log_cobranza";
import {transaccion} from "./transaccion";
import {transaccion_rc} from "./transaccion_rc";


@Entity("estado_transaccion",{schema:"redcobrosjp" } )
export class estado_transaccion extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_estado_transaccion"
        })
    id_estado_transaccion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @OneToMany(type=>log_cobranza, log_cobranza=>log_cobranza.idEstadoTransaccion)
    logCobranzas:Promise<log_cobranza[]>;
    

   
    @OneToMany(type=>transaccion, transaccion=>transaccion.estadoTransaccion)
    transaccions:Promise<transaccion[]>;
    

   
    @OneToMany(type=>transaccion_rc, transaccion_rc=>transaccion_rc.idEstadoTransaccion)
    transaccionRcs:Promise<transaccion_rc[]>;
    
}
