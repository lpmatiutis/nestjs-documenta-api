import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";


@Entity("bines_tarj_clases",{schema:"redcobrosjp" } )
export class bines_tarj_clases extends BaseEntity {

    @Column("bigint",{ 
        nullable:true,
        name:"bin"
        })
    bin:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:2,
        name:"clase"
        })
    clase:string;
        

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.binesTarjClasess,{ primary:true, nullable:false, })
    @JoinColumn({ name:'servicio'})
    servicio:Promise<servicio_rc | null>;

    @RelationId((bines_tarj_clases: bines_tarj_clases) => bines_tarj_clases.servicio)
    servicioId: Promise<number[]>;
}
