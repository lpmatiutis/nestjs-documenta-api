import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transaccion_rc} from "./transaccion_rc";
import {tipo_dato_adicional} from "./tipo_dato_adicional";


@Entity("dato_adicional_trx",{schema:"redcobrosjp" } )
export class dato_adicional_trx extends BaseEntity {

   
    @ManyToOne(type=>transaccion_rc, transaccion_rc=>transaccion_rc.datoAdicionalTrxs,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_transaccion'})
    idTransaccion:Promise<transaccion_rc | null>;

    @RelationId((dato_adicional_trx: dato_adicional_trx) => dato_adicional_trx.idTransaccion)
    idTransaccionId: Promise<string[]>;

   
    @ManyToOne(type=>tipo_dato_adicional, tipo_dato_adicional=>tipo_dato_adicional.datoAdicionalTrxs,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_tipo_adicional'})
    idTipoAdicional:Promise<tipo_dato_adicional | null>;

    @RelationId((dato_adicional_trx: dato_adicional_trx) => dato_adicional_trx.idTipoAdicional)
    idTipoAdicionalId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:false,
        length:2048,
        name:"valor"
        })
    valor:string;
        

    @Column("smallint",{ 
        nullable:false,
        primary:true,
        default: () => "1",
        name:"ref_num"
        })
    ref_num:number;
        
}
