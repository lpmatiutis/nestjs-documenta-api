import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transaccion} from "./transaccion";


@Entity("ticket_impuesto",{schema:"redcobrosjp" } )
export class ticket_impuesto extends BaseEntity {

   
    @ManyToOne(type=>transaccion, transaccion=>transaccion.ticketImpuestos,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_transaccion'})
    idTransaccion:Promise<transaccion | null>;

    @RelationId((ticket_impuesto: ticket_impuesto) => ticket_impuesto.idTransaccion)
    idTransaccionId: Promise<string[]>;

    @Column("smallint",{ 
        nullable:false,
        primary:true,
        name:"id_tipo_operacion"
        })
    id_tipo_operacion:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:4000,
        name:"ticket"
        })
    ticket:string;
        
}
