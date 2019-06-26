import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {red} from "./red";
import {tipopago} from "./tipopago";
import {serviciooperacion} from "./serviciooperacion";


@Entity("redoperacion",{schema:"reddepago" } )
export class redoperacion extends BaseEntity {

   
    @ManyToOne(type=>red, red=>red.redoperacions,{ primary:true, nullable:false, eager: true, onDelete: 'RESTRICT',onUpdate: 'RESTRICT',  })
    @JoinColumn({ name:'idpersona'})
    idpersona:red | null;

    @RelationId((redoperacion: redoperacion) => redoperacion.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>red, red=>red.redoperacions2,{ primary:true, nullable:false, eager: true, onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:red | null;

    @RelationId((redoperacion: redoperacion) => redoperacion.idcliente)
    idclienteId: Promise<number[]>;

   
    @ManyToOne(type=>tipopago, tipopago=>tipopago.redoperacions,{ primary:true, nullable:false, eager: true, onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtipopago'})
    idtipopago:tipopago | null;

    @RelationId((redoperacion: redoperacion) => redoperacion.idtipopago)
    idtipopagoId: Promise<number[]>;

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
        

    @Column("character varying",{ 
        nullable:true,
        name:"descripcion"
        })
    descripcion:string | null;
        

   
    @OneToMany(type=>serviciooperacion, serviciooperacion=>serviciooperacion.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    serviciooperacions:Promise<serviciooperacion[]>;
    

   
    @OneToMany(type=>serviciooperacion, serviciooperacion=>serviciooperacion.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    serviciooperacions2:Promise<serviciooperacion[]>;
    

   
    @OneToMany(type=>serviciooperacion, serviciooperacion=>serviciooperacion.idtipopago,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    serviciooperacions3:Promise<serviciooperacion[]>;
    

   
    @OneToMany(type=>serviciooperacion, serviciooperacion=>serviciooperacion.idmoneda,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    serviciooperacions4:Promise<serviciooperacion[]>;
    
}
