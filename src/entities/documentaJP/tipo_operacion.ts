import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {log_transaccion_rc} from "./log_transaccion_rc";
import {servicio_carrier} from "./servicio_carrier";
import {ticket_transaccion} from "./ticket_transaccion";
import {transaccion_rc} from "./transaccion_rc";


@Entity("tipo_operacion",{schema:"redcobrosjp" } )
@Index("tipo_operacion_alias_key",["alias",],{unique:true})
export class tipo_operacion extends BaseEntity {

    @Column("smallint",{ 
        nullable:false,
        primary:true,
        name:"id_tipo_operacion"
        })
    id_tipo_operacion:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:50,
        name:"clase"
        })
    clase:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"alias"
        })
    alias:string | null;
        

   
    @OneToMany(type=>log_transaccion_rc, log_transaccion_rc=>log_transaccion_rc.idTipoOperacion)
    logTransaccionRcs:Promise<log_transaccion_rc[]>;
    

   
    @OneToMany(type=>servicio_carrier, servicio_carrier=>servicio_carrier.idTipoOperacion)
    servicioCarriers:Promise<servicio_carrier[]>;
    

   
    @OneToMany(type=>ticket_transaccion, ticket_transaccion=>ticket_transaccion.idTipoOperacion)
    ticketTransaccions:Promise<ticket_transaccion[]>;
    

   
    @OneToMany(type=>transaccion_rc, transaccion_rc=>transaccion_rc.idTipoOperacion)
    transaccionRcs:Promise<transaccion_rc[]>;
    
}
