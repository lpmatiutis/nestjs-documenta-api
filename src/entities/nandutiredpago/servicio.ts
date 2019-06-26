import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";
import {cajausuariofavorito} from "./cajausuariofavorito";
import {servicioconfig} from "./servicioconfig";
import {servicioestadohis} from "./servicioestadohis";
import {serviciometodo} from "./serviciometodo";
import {serviciomoneda} from "./serviciomoneda";
import {serviciotiposervicio} from "./serviciotiposervicio";
import {tipoplantillaservicio} from "./tipoplantillaservicio";
import { serviciooperacion } from "./serviciooperacion";


@Entity("servicio",{schema:"reddepago" } )
@Index("idx_uq_servicio_orden",["idcliente","idpersona","orden",],{unique:true})
export class servicio extends BaseEntity {

   
    @ManyToOne(type=>facturador, facturador=>facturador.servicios,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<facturador | null>;

    @RelationId((servicio: servicio) => servicio.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>facturador, facturador=>facturador.servicios2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<facturador | null>;

    @RelationId((servicio: servicio) => servicio.idcliente)
    idclienteId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idservicio"
        })
    idservicio:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"idtipoestadoservicio"
        })
    idtipoestadoservicio:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"etiquetaticket"
        })
    etiquetaticket:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecdesde"
        })
    fecdesde:Date;
        

    @Column("date",{ 
        nullable:true,
        name:"fechasta"
        })
    fechasta:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"acumulable"
        })
    acumulable:boolean;
        

    @Column("text",{ 
        nullable:false,
        name:"nota"
        })
    nota:string;
        

    @Column("text",{ 
        nullable:true,
        name:"notaestadoservicio"
        })
    notaestadoservicio:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"logoprincipal"
        })
    logoprincipal:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1000,
        name:"imgayuda"
        })
    imgayuda:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"logosecundario"
        })
    logosecundario:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"trxindividual"
        })
    trxindividual:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"totalapagareditable"
        })
    totalapagareditable:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"importeeditable"
        })
    importeeditable:boolean;
        

    @Column("bigint",{ 
        nullable:true,
        name:"idfacturadordocumenta"
        })
    idfacturadordocumenta:string | null;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "0",
        name:"ranking"
        })
    ranking:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:150,
        default: () => "'rcdocumenta.CallableRCConsult'",
        name:"middlewareclass"
        })
    middlewareclass:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:150,
        name:"refconverterclass"
        })
    refconverterclass:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:6,
        name:"refconverterdelimitador"
        })
    refconverterdelimitador:string | null;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "30",
        name:"tiempoesperaconsulta"
        })
    tiempoesperaconsulta:number;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "30",
        name:"tiempoesperapago"
        })
    tiempoesperapago:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:150,
        default: () => "'rcdocumenta.CallableRCPayment'",
        name:"middlewareclasspay"
        })
    middlewareclasspay:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:150,
        default: () => "'rcdocumenta.CallableRCTicket'",
        name:"middlewareclassticket"
        })
    middlewareclassticket:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"solopago"
        })
    solopago:boolean;
        

    @Column("character varying",{ 
        nullable:true,
        length:150,
        name:"controllerclass"
        })
    controllerclass:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"multiformadepago"
        })
    multiformadepago:boolean;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"tipomovcaja"
        })
    tipomovcaja:string | null;
        

    @Column("smallint",{ 
        nullable:true,
        unique: true,
        default: () => "0",
        name:"orden"
        })
    orden:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"obsmarketing"
        })
    obsmarketing:string | null;
        

    @Column("hstore",{ 
        nullable:true,
        name:"funcionalidad"
        })
    funcionalidad:string | null;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "0",
        precision:6,
        scale:2,
        name:"clubcajeropuntos"
        })
    clubcajeropuntos:string;
        

   
    @OneToMany(type=>cajausuariofavorito, cajausuariofavorito=>cajausuariofavorito.idpersonafacturador,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajausuariofavoritos:Promise<cajausuariofavorito[]>;
    

   
    @OneToMany(type=>cajausuariofavorito, cajausuariofavorito=>cajausuariofavorito.idclientefacturador,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajausuariofavoritos2:Promise<cajausuariofavorito[]>;
    

   
    @OneToMany(type=>cajausuariofavorito, cajausuariofavorito=>cajausuariofavorito.idservicio,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajausuariofavoritos3:Promise<cajausuariofavorito[]>;
    

   
    @OneToMany(type=>servicioconfig, servicioconfig=>servicioconfig.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    servicioconfigs:Promise<servicioconfig[]>;
    

   
    @OneToMany(type=>servicioconfig, servicioconfig=>servicioconfig.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    servicioconfigs2:Promise<servicioconfig[]>;
    

   
    @OneToMany(type=>servicioconfig, servicioconfig=>servicioconfig.idservicio,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    servicioconfigs3:Promise<servicioconfig[]>;
    

   
    @OneToMany(type=>servicioestadohis, servicioestadohis=>servicioestadohis.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    servicioestadohiss:Promise<servicioestadohis[]>;
    

   
    @OneToMany(type=>servicioestadohis, servicioestadohis=>servicioestadohis.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    servicioestadohiss2:Promise<servicioestadohis[]>;
    

   
    @OneToMany(type=>servicioestadohis, servicioestadohis=>servicioestadohis.idservicio,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    servicioestadohiss3:Promise<servicioestadohis[]>;
    

   
    @OneToMany(type=>serviciometodo, serviciometodo=>serviciometodo.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciometodos:Promise<serviciometodo[]>;
    

   
    @OneToMany(type=>serviciometodo, serviciometodo=>serviciometodo.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciometodos2:Promise<serviciometodo[]>;
    

   
    @OneToMany(type=>serviciometodo, serviciometodo=>serviciometodo.idservicio,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciometodos3:Promise<serviciometodo[]>;
    

   
    @OneToMany(type=>serviciomoneda, serviciomoneda=>serviciomoneda.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciomonedas:Promise<serviciomoneda[]>;
    

   
    @OneToMany(type=>serviciomoneda, serviciomoneda=>serviciomoneda.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciomonedas2:Promise<serviciomoneda[]>;
    

   
    @OneToMany(type=>serviciomoneda, serviciomoneda=>serviciomoneda.idservicio,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciomonedas3:Promise<serviciomoneda[]>;
    

   
    @OneToMany(type=>serviciotiposervicio, serviciotiposervicio=>serviciotiposervicio.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    serviciotiposervicios:Promise<serviciotiposervicio[]>;
    

   
    @OneToMany(type=>serviciotiposervicio, serviciotiposervicio=>serviciotiposervicio.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    serviciotiposervicios2:Promise<serviciotiposervicio[]>;
    

   
    @OneToMany(type=>serviciotiposervicio, serviciotiposervicio=>serviciotiposervicio.idservicio,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    serviciotiposervicios3:Promise<serviciotiposervicio[]>;
    

   
    // @ManyToMany(type=>tipoplantillaservicio, tipoplantillaservicio=>tipoplantillaservicio.servicios,{  nullable:false, })
    // @JoinTable({ name:'servicioplantilla'})
    // tipoplantillaservicios:Promise<tipoplantillaservicio[]>;
    
    // @RelationId((servicio: servicio) => servicio.tipoplantillaservicios)
    // tipoplantillaserviciosId: Promise<undefined[]>;

    @OneToMany(type=>serviciooperacion, serviciooperacion=>serviciooperacion.idservicio,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    serviciooperacion:Promise<serviciooperacion[]>;
}
