import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {cliente} from "./cliente";
import {tipofacturador} from "./tipofacturador";
import {cajausuariofavorito} from "./cajausuariofavorito";
import {facturadortipofacturador} from "./facturadortipofacturador";
import {servicio} from "./servicio";


@Entity("facturador",{schema:"reddepago" } )
@Index("idx_uq_facturador_idfacturadordocumenta",["idfacturadordocumenta",],{unique:true})
export class facturador extends BaseEntity {

   
    @ManyToOne(type=>cliente, cliente=>cliente.facturadors,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<cliente | null>;

    @RelationId((facturador: facturador) => facturador.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>cliente, cliente=>cliente.facturadors2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<cliente | null>;

    @RelationId((facturador: facturador) => facturador.idcliente)
    idclienteId: Promise<number[]>;

   
    @ManyToOne(type=>tipofacturador, tipofacturador=>tipofacturador.facturadors,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtipofacturador'})
    idtipofacturador:Promise<tipofacturador | null>;

    @RelationId((facturador: facturador) => facturador.idtipofacturador)
    idtipofacturadorId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"etiquetaticket"
        })
    etiquetaticket:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"logoprincipal"
        })
    logoprincipal:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"logosecundario"
        })
    logosecundario:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"nota"
        })
    nota:string | null;
        

    @Column("date",{ 
        nullable:true,
        default: () => "now()",
        name:"feciniprd"
        })
    feciniprd:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"fecbajadefinitivaprd"
        })
    fecbajadefinitivaprd:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"rankingdocumenta"
        })
    rankingdocumenta:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"textobusqueda"
        })
    textobusqueda:string | null;
        

    @Column("integer",{ 
        nullable:false,
        default: () => "0",
        name:"codteclado"
        })
    codteclado:number;
        

    @Column("bigint",{ 
        nullable:false,
        unique: true,
        name:"idfacturadordocumenta"
        })
    idfacturadordocumenta:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:150,
        name:"clasecontroladoracb"
        })
    clasecontroladoracb:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"idtipoestadocliente"
        })
    idtipoestadocliente:number | null;
        

   
    @OneToMany(type=>cajausuariofavorito, cajausuariofavorito=>cajausuariofavorito.idpersonafacturador,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajausuariofavoritos:Promise<cajausuariofavorito[]>;
    

   
    @OneToMany(type=>cajausuariofavorito, cajausuariofavorito=>cajausuariofavorito.idclientefacturador,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajausuariofavoritos2:Promise<cajausuariofavorito[]>;
    

   
    @OneToMany(type=>facturadortipofacturador, facturadortipofacturador=>facturadortipofacturador.idpersona,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    facturadortipofacturadors:Promise<facturadortipofacturador[]>;
    

   
    @OneToMany(type=>facturadortipofacturador, facturadortipofacturador=>facturadortipofacturador.idcliente,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    facturadortipofacturadors2:Promise<facturadortipofacturador[]>;
    

   
    @OneToMany(type=>servicio, servicio=>servicio.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    servicios:Promise<servicio[]>;
    

   
    @OneToMany(type=>servicio, servicio=>servicio.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    servicios2:Promise<servicio[]>;
    
}
