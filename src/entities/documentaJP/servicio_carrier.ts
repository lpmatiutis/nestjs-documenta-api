import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";
import {tipo_operacion} from "./tipo_operacion";
import {detalle_en_linea} from "./detalle_en_linea";


@Entity("servicio_carrier",{schema:"redcobrosjp" } )
export class servicio_carrier extends BaseEntity {

    @Column("smallint",{ 
        nullable:false,
        name:"id_servicio_carrier"
        })
    id_servicio_carrier:number;
        

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.servicioCarriers,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:Promise<servicio_rc | null>;

    @RelationId((servicio_carrier: servicio_carrier) => servicio_carrier.idServicio)
    idServicioId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @ManyToOne(type=>tipo_operacion, tipo_operacion=>tipo_operacion.servicioCarriers,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_tipo_operacion'})
    idTipoOperacion:Promise<tipo_operacion | null>;

    @RelationId((servicio_carrier: servicio_carrier) => servicio_carrier.idTipoOperacion)
    idTipoOperacionId: Promise<number[]>;

   
    @OneToMany(type=>detalle_en_linea, detalle_en_linea=>detalle_en_linea.idServicio)
    detalleEnLineas:Promise<detalle_en_linea[]>;
    

   
    @OneToMany(type=>detalle_en_linea, detalle_en_linea=>detalle_en_linea.idTipoOperacion)
    detalleEnLineas2:Promise<detalle_en_linea[]>;
    
}
