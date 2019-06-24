import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {cliente} from "./cliente";
import {tiporecaudador} from "./tiporecaudador";
import {dispositivo} from "./dispositivo";
import {dispositivoserial} from "./dispositivoserial";
import {sucursal} from "./sucursal";


@Entity("recaudador",{schema:"reddepago" } )
@Index("idx_uq_recaudador_codigo",["codigo",],{unique:true})
@Index("recaudador_idrecaudadordocumenta_key",["idrecaudadordocumenta",],{unique:true})
export class recaudador extends BaseEntity {

   
    @ManyToOne(type=>cliente, cliente=>cliente.recaudadors,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<cliente | null>;

    @RelationId((recaudador: recaudador) => recaudador.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>cliente, cliente=>cliente.recaudadors2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<cliente | null>;

    @RelationId((recaudador: recaudador) => recaudador.idcliente)
    idclienteId: Promise<number[]>;

   
    @ManyToOne(type=>tiporecaudador, tiporecaudador=>tiporecaudador.recaudadors,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtiporecaudador'})
    idtiporecaudador:Promise<tiporecaudador | null>;

    @RelationId((recaudador: recaudador) => recaudador.idtiporecaudador)
    idtiporecaudadorId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"codigo"
        })
    codigo:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"etiquetaticket"
        })
    etiquetaticket:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"transacenlinea"
        })
    transacenlinea:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("bigint",{ 
        nullable:false,
        unique: true,
        name:"idrecaudadordocumenta"
        })
    idrecaudadordocumenta:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"codigorecaudadordocumenta"
        })
    codigorecaudadordocumenta:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"identidaddocumenta"
        })
    identidaddocumenta:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"clasecontroladorahb"
        })
    clasecontroladorahb:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"codigohb"
        })
    codigohb:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"colorbase"
        })
    colorbase:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"clubcajero"
        })
    clubcajero:boolean;
        

    @Column("integer",{ 
        nullable:true,
        name:"iddestinoimpresion"
        })
    iddestinoimpresion:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"urlinternanti"
        })
    urlinternanti:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"idusuarioresponsable"
        })
    idusuarioresponsable:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fechaasignacionusuario"
        })
    fechaasignacionusuario:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"idusuarioresponsableant"
        })
    idusuarioresponsableant:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"correosoportehb"
        })
    correosoportehb:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"idtipoestadocliente"
        })
    idtipoestadocliente:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"dobleticket"
        })
    dobleticket:boolean;
        

   
    @OneToMany(type=>dispositivo, dispositivo=>dispositivo.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    dispositivos:Promise<dispositivo[]>;
    

   
    @OneToMany(type=>dispositivo, dispositivo=>dispositivo.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    dispositivos2:Promise<dispositivo[]>;
    

   
    @OneToMany(type=>dispositivoserial, dispositivoserial=>dispositivoserial.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    dispositivoserials:Promise<dispositivoserial[]>;
    

   
    @OneToMany(type=>dispositivoserial, dispositivoserial=>dispositivoserial.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    dispositivoserials2:Promise<dispositivoserial[]>;
    

   
    @OneToMany(type=>sucursal, sucursal=>sucursal.idpersona)
    sucursals:Promise<sucursal[]>;
    

   
    @OneToMany(type=>sucursal, sucursal=>sucursal.idcliente)
    sucursals2:Promise<sucursal[]>;
    
}
