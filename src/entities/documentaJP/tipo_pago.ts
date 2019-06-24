import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {numero_ot} from "./numero_ot";
import {numero_ot2} from "./numero_ot2";
import {transaccion} from "./transaccion";
import {transaccion_rc} from "./transaccion_rc";


@Entity("tipo_pago",{schema:"redcobrosjp" } )
export class tipo_pago extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_tipo_pago"
        })
    id_tipo_pago:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character",{ 
        nullable:true,
        name:"soportado"
        })
    soportado:string | null;
        

   
    @OneToMany(type=>numero_ot, numero_ot=>numero_ot.tipoPago)
    numeroOts:Promise<numero_ot[]>;
    

   
    @OneToMany(type=>numero_ot2, numero_ot2=>numero_ot2.tipoPago)
    numeroOts2:Promise<numero_ot2[]>;
    

   
    @OneToMany(type=>transaccion, transaccion=>transaccion.tipoPago)
    transaccions:Promise<transaccion[]>;
    

   
    @OneToMany(type=>transaccion_rc, transaccion_rc=>transaccion_rc.idTipoPago)
    transaccionRcs:Promise<transaccion_rc[]>;
    
}
