import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";


@Entity("bin_tarj_clases",{schema:"redcobrosjp" } )
export class bin_tarj_clases extends BaseEntity {

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
        

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.binTarjClasess,{ primary:true, nullable:false, })
    @JoinColumn({ name:'servicio'})
    servicio:Promise<servicio_rc | null>;

    @RelationId((bin_tarj_clases: bin_tarj_clases) => bin_tarj_clases.servicio)
    servicioId: Promise<number[]>;
}
