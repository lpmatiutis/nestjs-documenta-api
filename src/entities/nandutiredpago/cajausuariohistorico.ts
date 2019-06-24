import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {cajausuario} from "./cajausuario";


@Entity("cajausuariohistorico",{schema:"reddepago" } )
@Index("idx_uq_cajausuariohistorico_nrotransaccion",["nrotransaccion",],{unique:true})
export class cajausuariohistorico extends BaseEntity {

   
    @ManyToOne(type=>cajausuario, cajausuario=>cajausuario.cajausuariohistoricos,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<cajausuario | null>;

    @RelationId((cajausuariohistorico: cajausuariohistorico) => cajausuariohistorico.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>cajausuario, cajausuario=>cajausuario.cajausuariohistoricos2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<cajausuario | null>;

    @RelationId((cajausuariohistorico: cajausuariohistorico) => cajausuariohistorico.idcliente)
    idclienteId: Promise<number[]>;

   
    @ManyToOne(type=>cajausuario, cajausuario=>cajausuario.cajausuariohistoricos3,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idsucursal'})
    idsucursal:Promise<cajausuario | null>;

    @RelationId((cajausuariohistorico: cajausuariohistorico) => cajausuariohistorico.idsucursal)
    idsucursalId: Promise<number[]>;

   
    @ManyToOne(type=>cajausuario, cajausuario=>cajausuario.cajausuariohistoricos4,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcaja'})
    idcaja:Promise<cajausuario | null>;

    @RelationId((cajausuariohistorico: cajausuariohistorico) => cajausuariohistorico.idcaja)
    idcajaId: Promise<number[]>;

   
    @ManyToOne(type=>cajausuario, cajausuario=>cajausuario.cajausuariohistoricos5,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idusuario'})
    idusuario:Promise<cajausuario | null>;

    @RelationId((cajausuariohistorico: cajausuariohistorico) => cajausuariohistorico.idusuario)
    idusuarioId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"idcajausuariohistorico"
        })
    idcajausuariohistorico:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"idpersonafacturador"
        })
    idpersonafacturador:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"idclientefacturador"
        })
    idclientefacturador:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"idservicio"
        })
    idservicio:number | null;
        

    @Column("bigint",{ 
        nullable:false,
        unique: true,
        name:"nrotransaccion"
        })
    nrotransaccion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"nrocuenta"
        })
    nrocuenta:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"titular"
        })
    titular:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"fecoperacion"
        })
    fecoperacion:Date;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"referenciapago"
        })
    referenciapago:string | null;
        

    @Column("numeric",{ 
        nullable:false,
        precision:12,
        scale:2,
        name:"monto"
        })
    monto:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"aprobado"
        })
    aprobado:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"ticket"
        })
    ticket:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"smartloyalty"
        })
    smartloyalty:boolean;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"smartloyaltydate"
        })
    smartloyaltydate:Date | null;
        
}
