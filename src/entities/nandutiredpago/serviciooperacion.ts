import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {redoperacion} from "./redoperacion";
import {serviciomoneda} from "./serviciomoneda";
import {cajaserviciooperacion} from "./cajaserviciooperacion";


@Entity("serviciooperacion",{schema:"reddepago" } )
@Index("idx_uq_servicioredoperacion_redoperacion",["idcliente","idclienteservicio","idmoneda","idmonedaservicio","idpersona","idpersonaservicio","idservicio","idtipopago",],{unique:true})
export class serviciooperacion extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idserviciooperacion"
        })
    idserviciooperacion:number;
        

   
    @ManyToOne(type=>redoperacion, redoperacion=>redoperacion.serviciooperacions,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<redoperacion | null>;

    @RelationId((serviciooperacion: serviciooperacion) => serviciooperacion.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>redoperacion, redoperacion=>redoperacion.serviciooperacions2,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<redoperacion | null>;

    @RelationId((serviciooperacion: serviciooperacion) => serviciooperacion.idcliente)
    idclienteId: Promise<number[]>;

   
    @ManyToOne(type=>redoperacion, redoperacion=>redoperacion.serviciooperacions3,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtipopago'})
    idtipopago:Promise<redoperacion | null>;

    @RelationId((serviciooperacion: serviciooperacion) => serviciooperacion.idtipopago)
    idtipopagoId: Promise<number[]>;

   
    @ManyToOne(type=>redoperacion, redoperacion=>redoperacion.serviciooperacions4,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idmoneda'})
    idmoneda:Promise<redoperacion | null>;

    @RelationId((serviciooperacion: serviciooperacion) => serviciooperacion.idmoneda)
    idmonedaId: Promise<number[]>;

   
    @ManyToOne(type=>serviciomoneda, serviciomoneda=>serviciomoneda.serviciooperacions,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idpersonaservicio'})
    idpersonaservicio:Promise<serviciomoneda | null>;

    @RelationId((serviciooperacion: serviciooperacion) => serviciooperacion.idpersonaservicio)
    idpersonaservicioId: Promise<number[]>;

   
    @ManyToOne(type=>serviciomoneda, serviciomoneda=>serviciomoneda.serviciooperacions2,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idclienteservicio'})
    idclienteservicio:Promise<serviciomoneda | null>;

    @RelationId((serviciooperacion: serviciooperacion) => serviciooperacion.idclienteservicio)
    idclienteservicioId: Promise<number[]>;

   
    @ManyToOne(type=>serviciomoneda, serviciomoneda=>serviciomoneda.serviciooperacions3,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idservicio'})
    idservicio:Promise<serviciomoneda | null>;

    @RelationId((serviciooperacion: serviciooperacion) => serviciooperacion.idservicio)
    idservicioId: Promise<number[]>;

   
    @ManyToOne(type=>serviciomoneda, serviciomoneda=>serviciomoneda.serviciooperacions4,{ onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idmonedaservicio'})
    idmonedaservicio:Promise<serviciomoneda | null>;

    @RelationId((serviciooperacion: serviciooperacion) => serviciooperacion.idmonedaservicio)
    idmonedaservicioId: Promise<number[]>;

    @Column("integer",{ 
        nullable:true,
        name:"idbanco"
        })
    idbanco:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"idcuenta"
        })
    idcuenta:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("numeric",{ 
        nullable:true,
        precision:6,
        scale:2,
        name:"clubcajeropuntos"
        })
    clubcajeropuntos:string | null;
        

   
    @OneToMany(type=>cajaserviciooperacion, cajaserviciooperacion=>cajaserviciooperacion.idserviciooperacion,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajaserviciooperacions:Promise<cajaserviciooperacion[]>;
    
}
