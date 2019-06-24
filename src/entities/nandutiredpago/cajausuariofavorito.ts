import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";
import {servicio} from "./servicio";


@Entity("cajausuariofavorito",{schema:"reddepago" } )
//@Index("idx_uq_cajausuariofavorito_facturadornrocuenta",["idcliente","idclientefacturador","idpersona","idpersonafacturador","idusuario","nrocuenta",],{unique:true})
export class cajausuariofavorito extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"idcajausuariofavorito"
        })
    idcajausuariofavorito:string;
        

    @Column("integer",{ 
        nullable:false,
        unique: true,
        name:"idusuario"
        })
    idusuario:number;
        

    @Column("integer",{ 
        nullable:false,
        unique: true,
        name:"idpersona"
        })
    idpersona:number;
        

    @Column("integer",{ 
        nullable:false,
        unique: true,
        name:"idcliente"
        })
    idcliente:number;
        

   
    @ManyToOne(type=>facturador, facturador=>facturador.cajausuariofavoritos,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersonafacturador'})
    idpersonafacturador:Promise<facturador | null>;

    @RelationId((cajausuariofavorito: cajausuariofavorito) => cajausuariofavorito.idpersonafacturador)
    idpersonafacturadorId: Promise<string[]>;
    @ManyToOne(type=>servicio, servicio=>servicio.cajausuariofavoritos,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersonafacturador'})
    idpersonafacturadorc:Promise<servicio | null>;

    @RelationId((cajausuariofavorito: cajausuariofavorito) => cajausuariofavorito.idpersonafacturador)
    idpersonafacturadorIdc: Promise<string[]>;

   
    @ManyToOne(type=>facturador, facturador=>facturador.cajausuariofavoritos2,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idclientefacturador'})
    idclientefacturador:Promise<facturador | null>;

    @RelationId((cajausuariofavorito: cajausuariofavorito) => cajausuariofavorito.idclientefacturador)
    idclientefacturadorId: Promise<number[]>;
    @ManyToOne(type=>servicio, servicio=>servicio.cajausuariofavoritos2,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idclientefacturador'})
    idclientefacturadorc:Promise<servicio | null>;

    @RelationId((cajausuariofavorito: cajausuariofavorito) => cajausuariofavorito.idclientefacturador)
    idclientefacturadorIdc: Promise<number[]>;

    @Column("smallint",{ 
        nullable:false,
        default: () => "1",
        name:"idtipolista"
        })
    idtipolista:number;
        

   
    @ManyToOne(type=>servicio, servicio=>servicio.cajausuariofavoritos3,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idservicio'})
    idservicio:Promise<servicio | null>;

    @RelationId((cajausuariofavorito: cajausuariofavorito) => cajausuariofavorito.idservicio)
    idservicioId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:true,
        unique: true,
        length:50,
        name:"nrocuenta"
        })
    nrocuenta:string | null;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "0",
        name:"ranking"
        })
    ranking:number;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        default: () => "now()",
        name:"fecalta"
        })
    fecalta:Date;
        
}
