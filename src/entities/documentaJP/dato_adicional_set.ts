import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transaccion} from "./transaccion";
import {tipo_dato_adicional} from "./tipo_dato_adicional";


@Entity("dato_adicional_set",{schema:"redcobrosjp" } )
export class dato_adicional_set extends BaseEntity {

   
    @OneToOne(type=>transaccion, transaccion=>transaccion.datoAdicionalSet,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_transaccion'})
    idTransaccion:Promise<transaccion | null>;

    @RelationId((dato_adicional_set: dato_adicional_set) => dato_adicional_set.idTransaccion)
    idTransaccionId: Promise<string>;

   
    @ManyToOne(type=>tipo_dato_adicional, tipo_dato_adicional=>tipo_dato_adicional.datoAdicionalSets,{  nullable:false, })
    @JoinColumn({ name:'id_tipo_adicional'})
    idTipoAdicional:Promise<tipo_dato_adicional | null>;

    @RelationId((dato_adicional_set: dato_adicional_set) => dato_adicional_set.idTipoAdicional)
    idTipoAdicionalId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:false,
        length:1024,
        default: () => "' '",
        name:"valor"
        })
    valor:string;
        
}
