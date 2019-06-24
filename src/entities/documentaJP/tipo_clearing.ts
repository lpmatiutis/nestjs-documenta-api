import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {config_clearing_servicio} from "./config_clearing_servicio";


@Entity("tipo_clearing",{schema:"redcobrosjp" } )
export class tipo_clearing extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_tipo_clearing"
        })
    id_tipo_clearing:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @OneToMany(type=>config_clearing_servicio, config_clearing_servicio=>config_clearing_servicio.tipoClearing)
    configClearingServicios:Promise<config_clearing_servicio[]>;
    
}
