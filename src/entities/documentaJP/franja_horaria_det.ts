import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {franja_horaria_cab} from "./franja_horaria_cab";


@Entity("franja_horaria_det",{schema:"redcobrosjp" } )
export class franja_horaria_det extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_franja_horaria_det"
        })
    id_franja_horaria_det:string;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:2,
        name:"dia"
        })
    dia:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"hora_fin"
        })
    hora_fin:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"hora_ini"
        })
    hora_ini:Date;
        

   
    @ManyToOne(type=>franja_horaria_cab, franja_horaria_cab=>franja_horaria_cab.franjaHorariaDets,{  nullable:false, })
    @JoinColumn({ name:'franja_horaria_cab'})
    franjaHorariaCab:Promise<franja_horaria_cab | null>;

    @RelationId((franja_horaria_det: franja_horaria_det) => franja_horaria_det.franjaHorariaCab)
    franjaHorariaCabId: Promise<string[]>;
}
