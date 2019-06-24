import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {clearing_facturador} from "./clearing_facturador";
import {recaudador} from "./recaudador";


@Entity("dist_clearing_fact",{schema:"redcobrosjp" } )
export class dist_clearing_fact extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_dist_clearing_fact"
        })
    id_dist_clearing_fact:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"monto"
        })
    monto:number;
        

   
    @ManyToOne(type=>clearing_facturador, clearing_facturador=>clearing_facturador.distClearingFacts,{  nullable:false, })
    @JoinColumn({ name:'clearing_facturador'})
    clearingFacturador:Promise<clearing_facturador | null>;

    @RelationId((dist_clearing_fact: dist_clearing_fact) => dist_clearing_fact.clearingFacturador)
    clearingFacturadorId: Promise<string[]>;

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.distClearingFacts,{  nullable:false, })
    @JoinColumn({ name:'recaudador'})
    recaudador:Promise<recaudador | null>;

    @RelationId((dist_clearing_fact: dist_clearing_fact) => dist_clearing_fact.recaudador)
    recaudadorId: Promise<string[]>;
}
