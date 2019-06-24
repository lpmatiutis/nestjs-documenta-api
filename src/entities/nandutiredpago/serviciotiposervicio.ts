import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio} from "./servicio";
import {tiposervicio} from "./tiposervicio";


@Entity("serviciotiposervicio",{schema:"reddepago" } )
export class serviciotiposervicio extends BaseEntity {

   
    @ManyToOne(type=>servicio, servicio=>servicio.serviciotiposervicios,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<servicio | null>;

    @RelationId((serviciotiposervicio: serviciotiposervicio) => serviciotiposervicio.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>servicio, servicio=>servicio.serviciotiposervicios2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<servicio | null>;

    @RelationId((serviciotiposervicio: serviciotiposervicio) => serviciotiposervicio.idcliente)
    idclienteId: Promise<number[]>;

   
    @ManyToOne(type=>servicio, servicio=>servicio.serviciotiposervicios3,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idservicio'})
    idservicio:Promise<servicio | null>;

    @RelationId((serviciotiposervicio: serviciotiposervicio) => serviciotiposervicio.idservicio)
    idservicioId: Promise<number[]>;

   
    @ManyToOne(type=>tiposervicio, tiposervicio=>tiposervicio.serviciotiposervicios,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtiposervicio'})
    idtiposervicio:Promise<tiposervicio | null>;

    @RelationId((serviciotiposervicio: serviciotiposervicio) => serviciotiposervicio.idtiposervicio)
    idtiposervicioId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"textobusqueda"
        })
    textobusqueda:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"principal"
        })
    principal:boolean;
        
}
