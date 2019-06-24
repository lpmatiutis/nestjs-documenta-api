import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {cajausuario} from "./cajausuario";
import {dispositivo} from "./dispositivo";


@Entity("cajacierre",{schema:"reddepago" } )
@Index("idx_uq_cajacierre_idgestiondocumenta",["idgestiondocumenta",],{unique:true})
export class cajacierre extends BaseEntity {

   
    @ManyToOne(type=>cajausuario, cajausuario=>cajausuario.cajacierres,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<cajausuario | null>;

    @RelationId((cajacierre: cajacierre) => cajacierre.idpersona)
    idpersonaId: Promise<number[]>;
    @ManyToOne(type=>dispositivo, dispositivo=>dispositivo.cajacierres,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersonad:Promise<dispositivo | null>;

    @RelationId((cajacierre: cajacierre) => cajacierre.idpersona)
    idpersonaIdd: Promise<number[]>;

   
    @ManyToOne(type=>cajausuario, cajausuario=>cajausuario.cajacierres2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<cajausuario | null>;

    @RelationId((cajacierre: cajacierre) => cajacierre.idcliente)
    idclienteId: Promise<number[]>;
    @ManyToOne(type=>dispositivo, dispositivo=>dispositivo.cajacierres2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliented:Promise<dispositivo | null>;

    @RelationId((cajacierre: cajacierre) => cajacierre.idcliente)
    idclienteIdd: Promise<number[]>;

   
    @ManyToOne(type=>cajausuario, cajausuario=>cajausuario.cajacierres3,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idsucursal'})
    idsucursal:Promise<cajausuario | null>;

    @RelationId((cajacierre: cajacierre) => cajacierre.idsucursal)
    idsucursalId: Promise<number[]>;

   
    @ManyToOne(type=>cajausuario, cajausuario=>cajausuario.cajacierres4,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcaja'})
    idcaja:Promise<cajausuario | null>;

    @RelationId((cajacierre: cajacierre) => cajacierre.idcaja)
    idcajaId: Promise<number[]>;

   
    @ManyToOne(type=>cajausuario, cajausuario=>cajausuario.cajacierres5,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idusuario'})
    idusuario:Promise<cajausuario | null>;

    @RelationId((cajacierre: cajacierre) => cajacierre.idusuario)
    idusuarioId: Promise<number[]>;

   
    @ManyToOne(type=>dispositivo, dispositivo=>dispositivo.cajacierres3,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'iddispositivo'})
    iddispositivo:Promise<dispositivo | null>;

    @RelationId((cajacierre: cajacierre) => cajacierre.iddispositivo)
    iddispositivoId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"idcierre"
        })
    idcierre:string;
        

    @Column("bigint",{ 
        nullable:false,
        unique: true,
        name:"idgestiondocumenta"
        })
    idgestiondocumenta:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        default: () => "now()",
        name:"fecapertura"
        })
    fecapertura:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"feccierre"
        })
    feccierre:Date | null;
        

    @Column("numeric",{ 
        nullable:false,
        precision:12,
        scale:2,
        name:"importeinicial"
        })
    importeinicial:string;
        

    @Column("numeric",{ 
        nullable:false,
        precision:12,
        scale:2,
        name:"totalcobrado"
        })
    totalcobrado:string;
        

    @Column("numeric",{ 
        nullable:false,
        precision:12,
        scale:2,
        name:"totalanulado"
        })
    totalanulado:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"datecancel"
        })
    datecancel:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"obscanncel"
        })
    obscanncel:string | null;
        

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
        
}
