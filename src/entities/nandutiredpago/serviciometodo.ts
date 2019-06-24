import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio} from "./servicio";
import {serviciometodoconfig} from "./serviciometodoconfig";
import {serviciometodoref} from "./serviciometodoref";


@Entity("serviciometodo",{schema:"reddepago" } )
export class serviciometodo extends BaseEntity {

   
    @ManyToOne(type=>servicio, servicio=>servicio.serviciometodos,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<servicio | null>;

    @RelationId((serviciometodo: serviciometodo) => serviciometodo.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>servicio, servicio=>servicio.serviciometodos2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<servicio | null>;

    @RelationId((serviciometodo: serviciometodo) => serviciometodo.idcliente)
    idclienteId: Promise<number[]>;

   
    @ManyToOne(type=>servicio, servicio=>servicio.serviciometodos3,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idservicio'})
    idservicio:Promise<servicio | null>;

    @RelationId((serviciometodo: serviciometodo) => serviciometodo.idservicio)
    idservicioId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"idserviciometodo"
        })
    idserviciometodo:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"idtiposervicioacceso"
        })
    idtiposervicioacceso:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"idtiposerviciometodo"
        })
    idtiposerviciometodo:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"url"
        })
    url:string | null;
        

    @Column("integer",{ 
        nullable:true,
        default: () => "0",
        name:"puerto"
        })
    puerto:number | null;
        

    @Column("smallint",{ 
        nullable:true,
        default: () => "0",
        name:"tiempoesperacon"
        })
    tiempoesperacon:number | null;
        

    @Column("smallint",{ 
        nullable:true,
        default: () => "0",
        name:"tiempoesperalectura"
        })
    tiempoesperalectura:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"clasecontroladora"
        })
    clasecontroladora:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"activo"
        })
    activo:boolean;
        

    @Column("smallint",{ 
        nullable:true,
        default: () => "10",
        name:"tiempoesperapago"
        })
    tiempoesperapago:number | null;
        

   
    @OneToMany(type=>serviciometodoconfig, serviciometodoconfig=>serviciometodoconfig.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciometodoconfigs:Promise<serviciometodoconfig[]>;
    

   
    @OneToMany(type=>serviciometodoconfig, serviciometodoconfig=>serviciometodoconfig.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciometodoconfigs2:Promise<serviciometodoconfig[]>;
    

   
    @OneToMany(type=>serviciometodoconfig, serviciometodoconfig=>serviciometodoconfig.idservicio,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciometodoconfigs3:Promise<serviciometodoconfig[]>;
    

   
    @OneToMany(type=>serviciometodoconfig, serviciometodoconfig=>serviciometodoconfig.idserviciometodo,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciometodoconfigs4:Promise<serviciometodoconfig[]>;
    

   
    @OneToMany(type=>serviciometodoref, serviciometodoref=>serviciometodoref.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciometodorefs:Promise<serviciometodoref[]>;
    

   
    @OneToMany(type=>serviciometodoref, serviciometodoref=>serviciometodoref.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciometodorefs2:Promise<serviciometodoref[]>;
    

   
    @OneToMany(type=>serviciometodoref, serviciometodoref=>serviciometodoref.idservicio,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciometodorefs3:Promise<serviciometodoref[]>;
    

   
    @OneToMany(type=>serviciometodoref, serviciometodoref=>serviciometodoref.idserviciometodo,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    serviciometodorefs4:Promise<serviciometodoref[]>;
    
}
