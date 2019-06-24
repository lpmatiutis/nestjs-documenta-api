import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio} from "./servicio";
import {serviciometodoconfig} from "./serviciometodoconfig";


@Entity("servicioconfig",{schema:"reddepago" } )
@Index("servicioconfing_idservicioconfig_key",["idservicioconfig",],{unique:true})
export class servicioconfig extends BaseEntity {

   
    @ManyToOne(type=>servicio, servicio=>servicio.servicioconfigs,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<servicio | null>;

    @RelationId((servicioconfig: servicioconfig) => servicioconfig.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>servicio, servicio=>servicio.servicioconfigs2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<servicio | null>;

    @RelationId((servicioconfig: servicioconfig) => servicioconfig.idcliente)
    idclienteId: Promise<number[]>;

   
    @ManyToOne(type=>servicio, servicio=>servicio.servicioconfigs3,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idservicio'})
    idservicio:Promise<servicio | null>;

    @RelationId((servicioconfig: servicioconfig) => servicioconfig.idservicio)
    idservicioId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"idservicioconfig"
        })
    idservicioconfig:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"clave"
        })
    clave:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"valor"
        })
    valor:string;
        

   
    @OneToMany(type=>serviciometodoconfig, serviciometodoconfig=>serviciometodoconfig.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciometodoconfigs:Promise<serviciometodoconfig[]>;
    

   
    @OneToMany(type=>serviciometodoconfig, serviciometodoconfig=>serviciometodoconfig.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciometodoconfigs2:Promise<serviciometodoconfig[]>;
    

   
    @OneToMany(type=>serviciometodoconfig, serviciometodoconfig=>serviciometodoconfig.idservicio,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciometodoconfigs3:Promise<serviciometodoconfig[]>;
    

   
    @OneToMany(type=>serviciometodoconfig, serviciometodoconfig=>serviciometodoconfig.idservicioconfig,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciometodoconfigs4:Promise<serviciometodoconfig[]>;
    
}
