import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {caja} from "./caja";
import {recaudador} from "./recaudador";
import {tipodispositivo} from "./tipodispositivo";
import {cajacierre} from "./cajacierre";


@Entity("dispositivo",{schema:"reddepago" } )
@Index("idx_uq_dispositivo_hashinfo",["hashinfo","idcliente","idpersona",],{unique:true})
@Index("idx_dispositivo_hashnti",["hashnti","idcliente","idpersona",])
export class dispositivo extends BaseEntity {

   
    @ManyToOne(type=>caja, caja=>caja.dispositivos,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<caja | null>;

    @RelationId((dispositivo: dispositivo) => dispositivo.idpersona)
    idpersonaId: Promise<number[]>;
    @ManyToOne(type=>recaudador, recaudador=>recaudador.dispositivos,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersonad:Promise<recaudador | null>;

    @RelationId((dispositivo: dispositivo) => dispositivo.idpersona)
    idpersonaIdd: Promise<number[]>;

   
    @ManyToOne(type=>caja, caja=>caja.dispositivos2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<caja | null>;

    @RelationId((dispositivo: dispositivo) => dispositivo.idcliente)
    idclienteId: Promise<number[]>;
    @ManyToOne(type=>recaudador, recaudador=>recaudador.dispositivos2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idclienter:Promise<recaudador | null>;

    @RelationId((dispositivo: dispositivo) => dispositivo.idcliente)
    idclienteIdr: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"iddispositivo"
        })
    iddispositivo:string;
        

   
    @ManyToOne(type=>caja, caja=>caja.dispositivos3,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idsucursal'})
    idsucursal:Promise<caja | null>;

    @RelationId((dispositivo: dispositivo) => dispositivo.idsucursal)
    idsucursalId: Promise<number[]>;

   
    @ManyToOne(type=>caja, caja=>caja.dispositivos4,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcaja'})
    idcaja:Promise<caja | null>;

    @RelationId((dispositivo: dispositivo) => dispositivo.idcaja)
    idcajaId: Promise<number[]>;

   
    @ManyToOne(type=>tipodispositivo, tipodispositivo=>tipodispositivo.dispositivos,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtipodispositivo'})
    idtipodispositivo:Promise<tipodispositivo | null>;

    @RelationId((dispositivo: dispositivo) => dispositivo.idtipodispositivo)
    idtipodispositivoId: Promise<number[]>;

    @Column("date",{ 
        nullable:true,
        name:"rangolicenciai"
        })
    rangolicenciai:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"rangolicenciaf"
        })
    rangolicenciaf:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"ultimoacceso"
        })
    ultimoacceso:Date | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        default: () => "now()",
        name:"aud_fecalta"
        })
    aud_fecalta:Date;
        

    @Column("integer",{ 
        nullable:false,
        default: () => "0",
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
        

    @Column("character",{ 
        nullable:true,
        length:255,
        name:"codigo_hash"
        })
    codigo_hash:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"urlprintserver"
        })
    urlprintserver:string | null;
        

    @Column("json",{ 
        nullable:true,
        name:"info"
        })
    info:Object | null;
        

    @Column("character varying",{ 
        nullable:true,
        unique: true,
        length:100,
        name:"hashinfo"
        })
    hashinfo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"hashnti"
        })
    hashnti:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"iddispositivoserial"
        })
    iddispositivoserial:string | null;
        

   
    @OneToMany(type=>cajacierre, cajacierre=>cajacierre.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajacierres:Promise<cajacierre[]>;
    

   
    @OneToMany(type=>cajacierre, cajacierre=>cajacierre.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajacierres2:Promise<cajacierre[]>;
    

   
    @OneToMany(type=>cajacierre, cajacierre=>cajacierre.iddispositivo,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajacierres3:Promise<cajacierre[]>;
    
}
