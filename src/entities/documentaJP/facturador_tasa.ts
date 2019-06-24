import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";
import {moneda} from "./moneda";


@Entity("facturador_tasa",{schema:"redcobrosjp" } )
export class facturador_tasa extends BaseEntity {

   
    @ManyToOne(type=>facturador, facturador=>facturador.facturadorTasas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'facturador'})
    facturador:Promise<facturador | null>;

    @RelationId((facturador_tasa: facturador_tasa) => facturador_tasa.facturador)
    facturadorId: Promise<string[]>;

   
    @ManyToOne(type=>moneda, moneda=>moneda.facturadorTasas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'moneda'})
    moneda:Promise<moneda | null>;

    @RelationId((facturador_tasa: facturador_tasa) => facturador_tasa.moneda)
    monedaId: Promise<number[]>;

    @Column("integer",{ 
        nullable:false,
        name:"tasa"
        })
    tasa:number;
        
}
