import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";


@Entity("ruteo_servicio",{schema:"redcobrosjp" } )
export class ruteo_servicio extends BaseEntity {

   
    @OneToOne(type=>facturador, facturador=>facturador.ruteoServicio,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_facturador'})
    idFacturador:Promise<facturador | null>;

    @RelationId((ruteo_servicio: ruteo_servicio) => ruteo_servicio.idFacturador)
    idFacturadorId: Promise<string>;

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"url_host"
        })
    url_host:string;
        

    @Column("integer",{ 
        nullable:true,
        default: () => "0",
        name:"puerto"
        })
    puerto:number | null;
        

    @Column("smallint",{ 
        nullable:false,
        name:"conexion_to"
        })
    conexion_to:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"read_to"
        })
    read_to:number;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'S'",
        name:"guardar_mensajes"
        })
    guardar_mensajes:string;
        
}
