import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";


@Entity("parametro_servicio",{schema:"redcobrosjp" } )
export class parametro_servicio extends BaseEntity {

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.parametroServicios,{ primary:true, nullable:false, eager:false, lazy:true})
    @JoinColumn({ name:'id_servicio'})
    idServicio:servicio_rc | null;

    @RelationId((parametro_servicio: parametro_servicio) => parametro_servicio.idServicio)
    idServicioId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:30,
        name:"clave"
        })
    clave:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:150,
        name:"valor"
        })
    valor:string;
        
}
