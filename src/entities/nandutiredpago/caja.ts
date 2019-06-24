import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {sucursal} from "./sucursal";
import {tipodestinoticket} from "./tipodestinoticket";
import {cajahomebanking} from "./cajahomebanking";
import {cajaserviciooperacion} from "./cajaserviciooperacion";
import {cajausuario} from "./cajausuario";
import {dispositivo} from "./dispositivo";


@Entity("caja",{schema:"reddepago" } )
@Index("idx_caja_codigocaja",["codigocaja","idcliente","idpersona",])
@Index("idx_uq_caja_codigocaja",["codigocaja","idcaja","idcliente","idpersona","idsucursal",],{unique:true})
@Index("idx_uq_caja_iddocumenta",["iddocumenta",],{unique:true})
export class caja extends BaseEntity {

   
    @ManyToOne(type=>sucursal, sucursal=>sucursal.cajas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<sucursal | null>;

    @RelationId((caja: caja) => caja.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>sucursal, sucursal=>sucursal.cajas2,{ primary:true, nullable:false, })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<sucursal | null>;

    @RelationId((caja: caja) => caja.idcliente)
    idclienteId: Promise<number[]>;

   
    @ManyToOne(type=>sucursal, sucursal=>sucursal.cajas3,{ primary:true, nullable:false, })
    @JoinColumn({ name:'idsucursal'})
    idsucursal:Promise<sucursal | null>;

    @RelationId((caja: caja) => caja.idsucursal)
    idsucursalId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"integer",
        name:"idcaja"
        })
    idcaja:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"etiquetaticket"
        })
    etiquetaticket:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("bigint",{ 
        nullable:true,
        unique: true,
        name:"iddocumenta"
        })
    iddocumenta:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        default: () => "0",
        name:"idcodigocajaset"
        })
    idcodigocajaset:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        unique: true,
        length:50,
        name:"codigocaja"
        })
    codigocaja:string | null;
        

   
    @ManyToOne(type=>tipodestinoticket, tipodestinoticket=>tipodestinoticket.cajas,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'iddestinoimpresion'})
    iddestinoimpresion:Promise<tipodestinoticket | null>;

    @RelationId((caja: caja) => caja.iddestinoimpresion)
    iddestinoimpresionId: Promise<number[]>;

   
    @OneToMany(type=>cajahomebanking, cajahomebanking=>cajahomebanking.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajahomebankings:Promise<cajahomebanking[]>;
    

   
    @OneToMany(type=>cajahomebanking, cajahomebanking=>cajahomebanking.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajahomebankings2:Promise<cajahomebanking[]>;
    

   
    @OneToMany(type=>cajahomebanking, cajahomebanking=>cajahomebanking.idsucursal,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajahomebankings3:Promise<cajahomebanking[]>;
    

   
    @OneToMany(type=>cajahomebanking, cajahomebanking=>cajahomebanking.idcaja,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajahomebankings4:Promise<cajahomebanking[]>;
    

   
    @OneToMany(type=>cajaserviciooperacion, cajaserviciooperacion=>cajaserviciooperacion.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajaserviciooperacions:Promise<cajaserviciooperacion[]>;
    

   
    @OneToMany(type=>cajaserviciooperacion, cajaserviciooperacion=>cajaserviciooperacion.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajaserviciooperacions2:Promise<cajaserviciooperacion[]>;
    

   
    @OneToMany(type=>cajaserviciooperacion, cajaserviciooperacion=>cajaserviciooperacion.idsucursal,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajaserviciooperacions3:Promise<cajaserviciooperacion[]>;
    

   
    @OneToMany(type=>cajaserviciooperacion, cajaserviciooperacion=>cajaserviciooperacion.idcaja,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajaserviciooperacions4:Promise<cajaserviciooperacion[]>;
    

   
    @OneToMany(type=>cajausuario, cajausuario=>cajausuario.idpersona)
    cajausuarios:Promise<cajausuario[]>;
    

   
    @OneToMany(type=>cajausuario, cajausuario=>cajausuario.idcliente)
    cajausuarios2:Promise<cajausuario[]>;
    

   
    @OneToMany(type=>cajausuario, cajausuario=>cajausuario.idsucursal)
    cajausuarios3:Promise<cajausuario[]>;
    

   
    @OneToMany(type=>cajausuario, cajausuario=>cajausuario.idcaja)
    cajausuarios4:Promise<cajausuario[]>;
    

   
    @OneToMany(type=>dispositivo, dispositivo=>dispositivo.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    dispositivos:Promise<dispositivo[]>;
    

   
    @OneToMany(type=>dispositivo, dispositivo=>dispositivo.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    dispositivos2:Promise<dispositivo[]>;
    

   
    @OneToMany(type=>dispositivo, dispositivo=>dispositivo.idsucursal,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    dispositivos3:Promise<dispositivo[]>;
    

   
    @OneToMany(type=>dispositivo, dispositivo=>dispositivo.idcaja,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    dispositivos4:Promise<dispositivo[]>;
    
}
