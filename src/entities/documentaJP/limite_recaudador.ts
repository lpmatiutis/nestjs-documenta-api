import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {recaudador} from "./recaudador";
import {moneda} from "./moneda";


@Entity("limite_recaudador",{schema:"redcobrosjp" } )
export class limite_recaudador extends BaseEntity {

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.limiteRecaudadors,{ primary:true, nullable:false, })
    @JoinColumn({ name:'recaudador'})
    recaudador:Promise<recaudador | null>;

    @RelationId((limite_recaudador: limite_recaudador) => limite_recaudador.recaudador)
    recaudadorId: Promise<string[]>;

   
    @ManyToOne(type=>moneda, moneda=>moneda.limiteRecaudadors,{ primary:true, nullable:false, })
    @JoinColumn({ name:'moneda'})
    moneda:Promise<moneda | null>;

    @RelationId((limite_recaudador: limite_recaudador) => limite_recaudador.moneda)
    monedaId: Promise<number[]>;

    @Column("bigint",{ 
        nullable:true,
        name:"limite"
        })
    limite:string | null;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"controlar"
        })
    controlar:string;
        
}
