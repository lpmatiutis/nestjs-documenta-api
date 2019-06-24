import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {moneda} from "./moneda";


@Entity("sucursal_moneda",{schema:"redcobrosjp" } )
export class sucursal_moneda extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"sucursal"
        })
    sucursal:string;
        

   
    @ManyToOne(type=>moneda, moneda=>moneda.sucursalMonedas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'moneda'})
    moneda:Promise<moneda | null>;

    @RelationId((sucursal_moneda: sucursal_moneda) => sucursal_moneda.moneda)
    monedaId: Promise<number[]>;

    @Column("character",{ 
        nullable:true,
        default: () => "'S'",
        name:"soportado"
        })
    soportado:string | null;
        
}
