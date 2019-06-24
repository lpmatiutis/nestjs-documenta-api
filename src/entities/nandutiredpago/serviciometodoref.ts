import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {serviciometodo} from "./serviciometodo";
import {tipovalor} from "./tipovalor";
import {referenciavista} from "./referenciavista";


@Entity("serviciometodoref",{schema:"reddepago" } )
export class serviciometodoref extends BaseEntity {

   
    @ManyToOne(type=>serviciometodo, serviciometodo=>serviciometodo.serviciometodorefs,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<serviciometodo | null>;

    @RelationId((serviciometodoref: serviciometodoref) => serviciometodoref.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>serviciometodo, serviciometodo=>serviciometodo.serviciometodorefs2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<serviciometodo | null>;

    @RelationId((serviciometodoref: serviciometodoref) => serviciometodoref.idcliente)
    idclienteId: Promise<number[]>;

   
    @ManyToOne(type=>serviciometodo, serviciometodo=>serviciometodo.serviciometodorefs3,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idservicio'})
    idservicio:Promise<serviciometodo | null>;

    @RelationId((serviciometodoref: serviciometodoref) => serviciometodoref.idservicio)
    idservicioId: Promise<number[]>;

   
    @ManyToOne(type=>serviciometodo, serviciometodo=>serviciometodo.serviciometodorefs4,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idserviciometodo'})
    idserviciometodo:Promise<serviciometodo | null>;

    @RelationId((serviciometodoref: serviciometodoref) => serviciometodoref.idserviciometodo)
    idserviciometodoId: Promise<string[]>;

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idserviciometodoref"
        })
    idserviciometodoref:number;
        

   
    @ManyToOne(type=>tipovalor, tipovalor=>tipovalor.serviciometodorefs,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtipovalor'})
    idtipovalor:Promise<tipovalor | null>;

    @RelationId((serviciometodoref: serviciometodoref) => serviciometodoref.idtipovalor)
    idtipovalorId: Promise<number[]>;

    @Column("integer",{ 
        nullable:true,
        name:"idtiposervicioref"
        })
    idtiposervicioref:number | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:256,
        name:"etiquetaticket"
        })
    etiquetaticket:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"imprimibleticket"
        })
    imprimibleticket:boolean;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"mascaraticket"
        })
    mascaraticket:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"refclearing"
        })
    refclearing:boolean;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"mascaraclearing"
        })
    mascaraclearing:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecbaja"
        })
    fecbaja:Date | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"activo"
        })
    activo:boolean;
        

   
    @OneToMany(type=>referenciavista, referenciavista=>referenciavista.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    referenciavistas:Promise<referenciavista[]>;
    

   
    @OneToMany(type=>referenciavista, referenciavista=>referenciavista.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    referenciavistas2:Promise<referenciavista[]>;
    

   
    @OneToMany(type=>referenciavista, referenciavista=>referenciavista.idservicio,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    referenciavistas3:Promise<referenciavista[]>;
    

   
    @OneToMany(type=>referenciavista, referenciavista=>referenciavista.idserviciometodo,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    referenciavistas4:Promise<referenciavista[]>;
    

   
    @OneToMany(type=>referenciavista, referenciavista=>referenciavista.idserviciometodoref,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    referenciavistas5:Promise<referenciavista[]>;
    
}
