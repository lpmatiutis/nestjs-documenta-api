import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicioconfig} from "./servicioconfig";
import {serviciometodo} from "./serviciometodo";


@Entity("serviciometodoconfig",{schema:"reddepago" } )
export class serviciometodoconfig extends BaseEntity {

   
    @ManyToOne(type=>servicioconfig, servicioconfig=>servicioconfig.serviciometodoconfigs,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<servicioconfig | null>;

    @RelationId((serviciometodoconfig: serviciometodoconfig) => serviciometodoconfig.idpersona)
    idpersonaId: Promise<number[]>;
    @ManyToOne(type=>serviciometodo, serviciometodo=>serviciometodo.serviciometodoconfigs,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idpersona'})
    idpersonas:Promise<serviciometodo | null>;

    @RelationId((serviciometodoconfig: serviciometodoconfig) => serviciometodoconfig.idpersona)
    idpersonaIds: Promise<number[]>;

   
    @ManyToOne(type=>servicioconfig, servicioconfig=>servicioconfig.serviciometodoconfigs2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<servicioconfig | null>;

    @RelationId((serviciometodoconfig: serviciometodoconfig) => serviciometodoconfig.idcliente)
    idclienteId: Promise<number[]>;
    @ManyToOne(type=>serviciometodo, serviciometodo=>serviciometodo.serviciometodoconfigs2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idcliente'})
    idclientes:Promise<serviciometodo | null>;

    @RelationId((serviciometodoconfig: serviciometodoconfig) => serviciometodoconfig.idcliente)
    idclienteIds: Promise<number[]>;

   
    @ManyToOne(type=>servicioconfig, servicioconfig=>servicioconfig.serviciometodoconfigs3,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idservicio'})
    idservicio:Promise<servicioconfig | null>;

    @RelationId((serviciometodoconfig: serviciometodoconfig) => serviciometodoconfig.idservicio)
    idservicioId: Promise<number[]>;
    @ManyToOne(type=>serviciometodo, serviciometodo=>serviciometodo.serviciometodoconfigs3,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idservicio'})
    idservicios:Promise<serviciometodo | null>;

    @RelationId((serviciometodoconfig: serviciometodoconfig) => serviciometodoconfig.idservicio)
    idservicioIds: Promise<number[]>;

   
    @ManyToOne(type=>serviciometodo, serviciometodo=>serviciometodo.serviciometodoconfigs4,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idserviciometodo'})
    idserviciometodo:Promise<serviciometodo | null>;

    @RelationId((serviciometodoconfig: serviciometodoconfig) => serviciometodoconfig.idserviciometodo)
    idserviciometodoId: Promise<string[]>;

   
    @ManyToOne(type=>servicioconfig, servicioconfig=>servicioconfig.serviciometodoconfigs4,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idservicioconfig'})
    idservicioconfig:Promise<servicioconfig | null>;

    @RelationId((serviciometodoconfig: serviciometodoconfig) => serviciometodoconfig.idservicioconfig)
    idservicioconfigId: Promise<number[]>;
}
