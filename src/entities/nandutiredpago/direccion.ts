import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {cliente} from "./cliente";
import {tipodireccion} from "./tipodireccion";
import {tipozona} from "./tipozona";
import {sucursal} from "./sucursal";


@Entity("direccion",{schema:"reddepago" } )
export class direccion extends BaseEntity {

   
    @ManyToOne(type=>cliente, cliente=>cliente.direccions,{ primary:true, nullable:false, })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<cliente | null>;

    @RelationId((direccion: direccion) => direccion.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>cliente, cliente=>cliente.direccions2,{ primary:true, nullable:false, })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<cliente | null>;

    @RelationId((direccion: direccion) => direccion.idcliente)
    idclienteId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"iddireccion"
        })
    iddireccion:number;
        

   
    @ManyToOne(type=>tipodireccion, tipodireccion=>tipodireccion.direccions,{  nullable:false, })
    @JoinColumn({ name:'idtipodireccion'})
    idtipodireccion:Promise<tipodireccion | null>;

    @RelationId((direccion: direccion) => direccion.idtipodireccion)
    idtipodireccionId: Promise<number[]>;

    @Column("integer",{ 
        nullable:false,
        name:"iddepartamento"
        })
    iddepartamento:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"idlocalidad"
        })
    idlocalidad:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"idbarrio"
        })
    idbarrio:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:200,
        name:"calleprincipal"
        })
    calleprincipal:string;
        

    @Column("integer",{ 
        nullable:true,
        default: () => "0",
        name:"nrocasa"
        })
    nrocasa:number | null;
        

    @Column("double precision",{ 
        nullable:true,
        default: () => "0",
        precision:53,
        name:"longitud"
        })
    longitud:number | null;
        

    @Column("double precision",{ 
        nullable:true,
        default: () => "0",
        precision:53,
        name:"latitud"
        })
    latitud:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"imagen"
        })
    imagen:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1000,
        name:"obs"
        })
    obs:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        default: () => "now()",
        name:"aud_fecalta"
        })
    aud_fecalta:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"aud_idusuarioalta"
        })
    aud_idusuarioalta:number;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"aud_fecmodif"
        })
    aud_fecmodif:Date | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"aud_idusuariomodif"
        })
    aud_idusuariomodif:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"callesecundaria1"
        })
    callesecundaria1:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"callesecundaria2"
        })
    callesecundaria2:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"tipocallesec"
        })
    tipocallesec:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"idsucursaldocumenta"
        })
    idsucursaldocumenta:number | null;
        

   
    @ManyToOne(type=>tipozona, tipozona=>tipozona.direccions,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtipozona'})
    idtipozona:Promise<tipozona | null>;

    @RelationId((direccion: direccion) => direccion.idtipozona)
    idtipozonaId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"direcciongeo"
        })
    direcciongeo:string | null;
        

   
    @OneToMany(type=>sucursal, sucursal=>sucursal.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    sucursals:Promise<sucursal[]>;
    

   
    @OneToMany(type=>sucursal, sucursal=>sucursal.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    sucursals2:Promise<sucursal[]>;
    

   
    @OneToMany(type=>sucursal, sucursal=>sucursal.iddireccion,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    sucursals3:Promise<sucursal[]>;
    
}
