import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {moneda} from "./moneda";


@Entity("recaudador_moneda",{schema:"redcobrosjp" } )
export class recaudador_moneda extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"recaudador"
        })
    recaudador:string;
        

   
    @ManyToOne(type=>moneda, moneda=>moneda.recaudadorMonedas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'moneda'})
    moneda:Promise<moneda | null>;

    @RelationId((recaudador_moneda: recaudador_moneda) => recaudador_moneda.moneda)
    monedaId: Promise<number[]>;

    @Column("character",{ 
        nullable:true,
        default: () => "'S'",
        name:"soportado"
        })
    soportado:string | null;
        
}
