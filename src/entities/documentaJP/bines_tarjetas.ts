import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";


@Entity("bines_tarjetas",{schema:"redcobrosjp" } )
export class bines_tarjetas extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"bin"
        })
    bin:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:40,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.binesTarjetass,{  })
    @JoinColumn({ name:'servicio_rc'})
    servicioRc:Promise<servicio_rc | null>;

    @RelationId((bines_tarjetas: bines_tarjetas) => bines_tarjetas.servicioRc)
    servicioRcId: Promise<number[]>;
}
