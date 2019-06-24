import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {config_clearing_servicio} from "./config_clearing_servicio";
import {distribucion_clearing} from "./distribucion_clearing";


@Entity("clearing",{schema:"redcobrosjp" } )
export class clearing extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_clearing"
        })
    id_clearing:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"cantidad"
        })
    cantidad:number;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha"
        })
    fecha:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora_creacion"
        })
    fecha_hora_creacion:Date;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"monto_distribuido"
        })
    monto_distribuido:number;
        

   
    @ManyToOne(type=>config_clearing_servicio, config_clearing_servicio=>config_clearing_servicio.clearings,{  nullable:false, })
    @JoinColumn({ name:'config_clearing_servicio'})
    configClearingServicio:Promise<config_clearing_servicio | null>;

    @RelationId((clearing: clearing) => clearing.configClearingServicio)
    configClearingServicioId: Promise<string[]>;

   
    @OneToMany(type=>distribucion_clearing, distribucion_clearing=>distribucion_clearing.clearing)
    distribucionClearings:Promise<distribucion_clearing[]>;
    
}
