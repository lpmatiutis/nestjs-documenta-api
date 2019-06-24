import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {clearing} from "./clearing";
import {configuracion_comisional} from "./configuracion_comisional";
import {recaudador} from "./recaudador";
import {sucursal} from "./sucursal";
import {distribucion_clearing_detalle} from "./distribucion_clearing_detalle";


@Entity("distribucion_clearing",{schema:"redcobrosjp" } )
export class distribucion_clearing extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_distribucion_clearing"
        })
    id_distribucion_clearing:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"cantidad"
        })
    cantidad:number;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"monto_distribucion"
        })
    monto_distribucion:number;
        

   
    @ManyToOne(type=>clearing, clearing=>clearing.distribucionClearings,{  nullable:false, })
    @JoinColumn({ name:'clearing'})
    clearing:Promise<clearing | null>;

    @RelationId((distribucion_clearing: distribucion_clearing) => distribucion_clearing.clearing)
    clearingId: Promise<string[]>;

   
    @ManyToOne(type=>configuracion_comisional, configuracion_comisional=>configuracion_comisional.distribucionClearings,{  nullable:false, })
    @JoinColumn({ name:'configuracion_comisional'})
    configuracionComisional:Promise<configuracion_comisional | null>;

    @RelationId((distribucion_clearing: distribucion_clearing) => distribucion_clearing.configuracionComisional)
    configuracionComisionalId: Promise<string[]>;

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.distribucionClearings,{  nullable:false, })
    @JoinColumn({ name:'recaudador'})
    recaudador:Promise<recaudador | null>;

    @RelationId((distribucion_clearing: distribucion_clearing) => distribucion_clearing.recaudador)
    recaudadorId: Promise<string[]>;

   
    @ManyToOne(type=>sucursal, sucursal=>sucursal.distribucionClearings,{  })
    @JoinColumn({ name:'sucursal'})
    sucursal:Promise<sucursal | null>;

    @RelationId((distribucion_clearing: distribucion_clearing) => distribucion_clearing.sucursal)
    sucursalId: Promise<string[]>;

   
    @OneToMany(type=>distribucion_clearing_detalle, distribucion_clearing_detalle=>distribucion_clearing_detalle.distribucionClearing)
    distribucionClearingDetalles:Promise<distribucion_clearing_detalle[]>;
    
}
