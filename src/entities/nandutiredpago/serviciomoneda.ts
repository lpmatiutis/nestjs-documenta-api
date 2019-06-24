import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio} from "./servicio";
import {serviciooperacion} from "./serviciooperacion";


@Entity("serviciomoneda",{schema:"reddepago" } )
export class serviciomoneda extends BaseEntity {

   
    @ManyToOne(type=>servicio, servicio=>servicio.serviciomonedas,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<servicio | null>;

    @RelationId((serviciomoneda: serviciomoneda) => serviciomoneda.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>servicio, servicio=>servicio.serviciomonedas2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<servicio | null>;

    @RelationId((serviciomoneda: serviciomoneda) => serviciomoneda.idcliente)
    idclienteId: Promise<number[]>;

   
    @ManyToOne(type=>servicio, servicio=>servicio.serviciomonedas3,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idservicio'})
    idservicio:Promise<servicio | null>;

    @RelationId((serviciomoneda: serviciomoneda) => serviciomoneda.idservicio)
    idservicioId: Promise<number[]>;

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idmoneda"
        })
    idmoneda:number;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("bigint",{ 
        nullable:true,
        name:"idserviciodocumenta"
        })
    idserviciodocumenta:string | null;
        

   
    @OneToMany(type=>serviciooperacion, serviciooperacion=>serviciooperacion.idpersonaservicio,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciooperacions:Promise<serviciooperacion[]>;
    

   
    @OneToMany(type=>serviciooperacion, serviciooperacion=>serviciooperacion.idclienteservicio,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciooperacions2:Promise<serviciooperacion[]>;
    

   
    @OneToMany(type=>serviciooperacion, serviciooperacion=>serviciooperacion.idservicio,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciooperacions3:Promise<serviciooperacion[]>;
    

   
    @OneToMany(type=>serviciooperacion, serviciooperacion=>serviciooperacion.idmonedaservicio,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciooperacions4:Promise<serviciooperacion[]>;
    
}
