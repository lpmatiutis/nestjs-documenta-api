import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {recaudador} from "./recaudador";
import {servicio_rc} from "./servicio_rc";
import {moneda} from "./moneda";


@Entity("limite_trx_servicio",{schema:"redcobrosjp" } )
export class limite_trx_servicio extends BaseEntity {

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.limiteTrxServicios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'recaudador'})
    recaudador:Promise<recaudador | null>;

    @RelationId((limite_trx_servicio: limite_trx_servicio) => limite_trx_servicio.recaudador)
    recaudadorId: Promise<string[]>;

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.limiteTrxServicios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'servicio'})
    servicio:Promise<servicio_rc | null>;

    @RelationId((limite_trx_servicio: limite_trx_servicio) => limite_trx_servicio.servicio)
    servicioId: Promise<number[]>;

   
    @ManyToOne(type=>moneda, moneda=>moneda.limiteTrxServicios,{  nullable:false, })
    @JoinColumn({ name:'moneda'})
    moneda:Promise<moneda | null>;

    @RelationId((limite_trx_servicio: limite_trx_servicio) => limite_trx_servicio.moneda)
    monedaId: Promise<number[]>;

    @Column("bigint",{ 
        nullable:false,
        name:"limite"
        })
    limite:string;
        
}
