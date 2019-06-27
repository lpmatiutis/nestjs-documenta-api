import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
//import {servicio} from "./servicio";


@Entity("tipoplantillaservicio",{schema:"reddepago" } )
@Index("idx_uq_tipoplantillaservicio_descripcion",["descripcion",],{unique:true})
export class tipoplantillaservicio extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtipoplantillaservicio"
        })
    idtipoplantillaservicio:number;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("text",{ 
        nullable:true,
        name:"obs"
        })
    obs:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

   
    //ManyToMany(type=>servicio, servicio=>servicio.tipoplantillaservicios)
    //servicios:Promise<servicio[]>;
    
}
