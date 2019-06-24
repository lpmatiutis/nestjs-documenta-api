import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";


@Entity("comision_servicio",{schema:"redcobrosjp" } )
export class comision_servicio extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id_comision_servicio"
        })
    id_comision_servicio:number;
        

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.comisionServicios,{  nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:Promise<servicio_rc | null>;

    @RelationId((comision_servicio: comision_servicio) => comision_servicio.idServicio)
    idServicioId: Promise<number[]>;

    @Column("real",{ 
        nullable:true,
        precision:24,
        name:"porcentaje"
        })
    porcentaje:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"minimo"
        })
    minimo:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"maximo"
        })
    maximo:number | null;
        
}
