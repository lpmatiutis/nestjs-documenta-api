import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";
import {tipo_captura} from "./tipo_captura";


@Entity("filtro_servicio_tipo_captura",{schema:"redcobrosjp" } )
export class filtro_servicio_tipo_captura extends BaseEntity {

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.filtroServicioTipoCapturas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:Promise<servicio_rc | null>;

    @RelationId((filtro_servicio_tipo_captura: filtro_servicio_tipo_captura) => filtro_servicio_tipo_captura.idServicio)
    idServicioId: Promise<number[]>;

   
    @ManyToOne(type=>tipo_captura, tipo_captura=>tipo_captura.filtroServicioTipoCapturas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_tipo_captura'})
    idTipoCaptura:Promise<tipo_captura | null>;

    @RelationId((filtro_servicio_tipo_captura: filtro_servicio_tipo_captura) => filtro_servicio_tipo_captura.idTipoCaptura)
    idTipoCapturaId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"descripcion"
        })
    descripcion:string | null;
        
}
