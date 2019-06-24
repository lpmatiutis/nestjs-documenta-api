import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";
import {moneda} from "./moneda";


@Entity("servicio_moneda",{schema:"redcobrosjp" } )
export class servicio_moneda extends BaseEntity {

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.servicioMonedas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'servicio'})
    servicio:Promise<servicio_rc | null>;

    @RelationId((servicio_moneda: servicio_moneda) => servicio_moneda.servicio)
    servicioId: Promise<number[]>;

   
    @ManyToOne(type=>moneda, moneda=>moneda.servicioMonedas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'moneda'})
    moneda:Promise<moneda | null>;

    @RelationId((servicio_moneda: servicio_moneda) => servicio_moneda.moneda)
    monedaId: Promise<number[]>;

    @Column("character",{ 
        nullable:true,
        default: () => "'S'",
        name:"soportado"
        })
    soportado:string | null;
        
}
