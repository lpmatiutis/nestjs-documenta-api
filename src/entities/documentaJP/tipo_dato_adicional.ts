import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {dato_adicional_set} from "./dato_adicional_set";
import {dato_adicional_trx} from "./dato_adicional_trx";


@Entity("tipo_dato_adicional",{schema:"redcobrosjp" } )
export class tipo_dato_adicional extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:30,
        name:"id_tipo_adicional"
        })
    id_tipo_adicional:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @OneToMany(type=>dato_adicional_set, dato_adicional_set=>dato_adicional_set.idTipoAdicional)
    datoAdicionalSets:Promise<dato_adicional_set[]>;
    

   
    @OneToMany(type=>dato_adicional_trx, dato_adicional_trx=>dato_adicional_trx.idTipoAdicional)
    datoAdicionalTrxs:Promise<dato_adicional_trx[]>;
    
}
