import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";


@Entity("tipo_servicio",{schema:"redcobrosjp" } )
export class tipo_servicio extends BaseEntity {

    @Column("smallint",{ 
        nullable:false,
        primary:true,
        name:"id_tipo_servicio"
        })
    id_tipo_servicio:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"alias"
        })
    alias:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @OneToMany(type=>servicio_rc, servicio_rc=>servicio_rc.idTipoServicio)
    servicioRcs:Promise<servicio_rc[]>;
    
}
