import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";
import {red} from "./red";


@Entity("habilitacion_fact_red",{schema:"redcobrosjp" } )
export class habilitacion_fact_red extends BaseEntity {

   
    @ManyToOne(type=>facturador, facturador=>facturador.habilitacionFactReds,{ primary:true, nullable:false, })
    @JoinColumn({ name:'facturador'})
    facturador:Promise<facturador | null>;

    @RelationId((habilitacion_fact_red: habilitacion_fact_red) => habilitacion_fact_red.facturador)
    facturadorId: Promise<string[]>;

   
    @ManyToOne(type=>red, red=>red.habilitacionFactReds,{ primary:true, nullable:false, })
    @JoinColumn({ name:'red'})
    red:Promise<red | null>;

    @RelationId((habilitacion_fact_red: habilitacion_fact_red) => habilitacion_fact_red.red)
    redId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"numero_cuenta"
        })
    numero_cuenta:string;
        
}
