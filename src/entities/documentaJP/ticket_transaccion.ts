import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transaccion_rc} from "./transaccion_rc";
import {tipo_operacion} from "./tipo_operacion";


@Entity("ticket_transaccion",{schema:"redcobrosjp" } )
export class ticket_transaccion extends BaseEntity {

   
    @ManyToOne(type=>transaccion_rc, transaccion_rc=>transaccion_rc.ticketTransaccions,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_transaccion'})
    idTransaccion:Promise<transaccion_rc | null>;

    @RelationId((ticket_transaccion: ticket_transaccion) => ticket_transaccion.idTransaccion)
    idTransaccionId: Promise<string[]>;

   
    @ManyToOne(type=>tipo_operacion, tipo_operacion=>tipo_operacion.ticketTransaccions,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_tipo_operacion'})
    idTipoOperacion:Promise<tipo_operacion | null>;

    @RelationId((ticket_transaccion: ticket_transaccion) => ticket_transaccion.idTipoOperacion)
    idTipoOperacionId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:false,
        length:4000,
        name:"ticket"
        })
    ticket:string;
        
}
