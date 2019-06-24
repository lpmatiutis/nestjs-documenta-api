import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {recaudador} from "./recaudador";
import {tipodispositivo} from "./tipodispositivo";


@Entity("dispositivoserial",{schema:"reddepago" } )
//@Index("idx_dispositivoserial_nombre",["idcliente","idpersona","nombre",])
export class dispositivoserial extends BaseEntity {

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.dispositivoserials,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<recaudador | null>;

    @RelationId((dispositivoserial: dispositivoserial) => dispositivoserial.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.dispositivoserials2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<recaudador | null>;

    @RelationId((dispositivoserial: dispositivoserial) => dispositivoserial.idcliente)
    idclienteId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"iddispositivoserial"
        })
    iddispositivoserial:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"idsucursal"
        })
    idsucursal:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"idcaja"
        })
    idcaja:number | null;
        

   
    @ManyToOne(type=>tipodispositivo, tipodispositivo=>tipodispositivo.dispositivoserials,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtipodispositivo'})
    idtipodispositivo:Promise<tipodispositivo | null>;

    @RelationId((dispositivoserial: dispositivoserial) => dispositivoserial.idtipodispositivo)
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
        

    @Column("character",{ 
        nullable:true,
        length:255,
        name:"codigo_hash"
        })
    codigo_hash:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:360,
        name:"serialdisco"
        })
    serialdisco:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:360,
        name:"serialplaca"
        })
    serialplaca:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"hashnti"
        })
    hashnti:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        default: () => "'http://localhost:12345'",
        name:"urlprintserver"
        })
    urlprintserver:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"ultimoacceso"
        })
    ultimoacceso:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecbaja"
        })
    fecbaja:Date | null;
        

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
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"nombre"
        })
    nombre:string | null;
        
}
