import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {config_comisional_detalle} from "./config_comisional_detalle";
import {distribucion_clearing_detalle} from "./distribucion_clearing_detalle";


@Entity("rol_comisionista",{schema:"redcobrosjp" } )
export class rol_comisionista extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_rol_comisionista"
        })
    id_rol_comisionista:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @OneToMany(type=>config_comisional_detalle, config_comisional_detalle=>config_comisional_detalle.rolComisionista)
    configComisionalDetalles:Promise<config_comisional_detalle[]>;
    

   
    @OneToMany(type=>distribucion_clearing_detalle, distribucion_clearing_detalle=>distribucion_clearing_detalle.rolComisionista)
    distribucionClearingDetalles:Promise<distribucion_clearing_detalle[]>;
    
}
