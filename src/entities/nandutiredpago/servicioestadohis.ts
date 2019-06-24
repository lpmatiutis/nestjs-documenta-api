import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio} from "./servicio";


@Entity("servicioestadohis",{schema:"reddepago" } )
export class servicioestadohis extends BaseEntity {

   
    @ManyToOne(type=>servicio, servicio=>servicio.servicioestadohiss,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<servicio | null>;

    @RelationId((servicioestadohis: servicioestadohis) => servicioestadohis.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>servicio, servicio=>servicio.servicioestadohiss2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<servicio | null>;

    @RelationId((servicioestadohis: servicioestadohis) => servicioestadohis.idcliente)
    idclienteId: Promise<number[]>;

   
    @ManyToOne(type=>servicio, servicio=>servicio.servicioestadohiss3,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idservicio'})
    idservicio:Promise<servicio | null>;

    @RelationId((servicioestadohis: servicioestadohis) => servicioestadohis.idservicio)
    idservicioId: Promise<number[]>;

    @Column("timestamp without time zone",{ 
        nullable:false,
        primary:true,
        name:"fecmodif"
        })
    fecmodif:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"idtipoestadoservicio"
        })
    idtipoestadoservicio:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"idusuario"
        })
    idusuario:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"notaestadoservicio"
        })
    notaestadoservicio:string;
        
}
