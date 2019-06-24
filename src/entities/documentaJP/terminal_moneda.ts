import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {moneda} from "./moneda";


@Entity("terminal_moneda",{schema:"redcobrosjp" } )
export class terminal_moneda extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"terminal"
        })
    terminal:string;
        

   
    @ManyToOne(type=>moneda, moneda=>moneda.terminalMonedas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'moneda'})
    moneda:Promise<moneda | null>;

    @RelationId((terminal_moneda: terminal_moneda) => terminal_moneda.moneda)
    monedaId: Promise<number[]>;

    @Column("character",{ 
        nullable:true,
        default: () => "'S'",
        name:"soportado"
        })
    soportado:string | null;
        
}
