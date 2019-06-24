import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {cliente} from "./cliente";
import {cajaserviciooperacion} from "./cajaserviciooperacion";


@Entity("clientecuenta",{schema:"reddepago" } )
export class clientecuenta extends BaseEntity {

   
    @ManyToOne(type=>cliente, cliente=>cliente.clientecuentas,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<cliente | null>;

    @RelationId((clientecuenta: clientecuenta) => clientecuenta.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>cliente, cliente=>cliente.clientecuentas2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<cliente | null>;

    @RelationId((clientecuenta: clientecuenta) => clientecuenta.idcliente)
    idclienteId: Promise<number[]>;

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idbanco"
        })
    idbanco:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idmoneda"
        })
    idmoneda:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idcuenta"
        })
    idcuenta:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"idtipogrupocuenta"
        })
    idtipogrupocuenta:number;
        

    @Column("date",{ 
        nullable:false,
        name:"fechadesde"
        })
    fechadesde:string;
        

    @Column("date",{ 
        nullable:false,
        name:"fechacancelacion"
        })
    fechacancelacion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:1000,
        name:"obs"
        })
    obs:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"bloqueado"
        })
    bloqueado:boolean;
        

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
        nullable:false,
        name:"aud_fecmodif"
        })
    aud_fecmodif:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"aud_idusuariomodif"
        })
    aud_idusuariomodif:number;
        

   
    @OneToMany(type=>cajaserviciooperacion, cajaserviciooperacion=>cajaserviciooperacion.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajaserviciooperacions:Promise<cajaserviciooperacion[]>;
    

   
    @OneToMany(type=>cajaserviciooperacion, cajaserviciooperacion=>cajaserviciooperacion.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajaserviciooperacions2:Promise<cajaserviciooperacion[]>;
    

   
    @OneToMany(type=>cajaserviciooperacion, cajaserviciooperacion=>cajaserviciooperacion.idbanco,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajaserviciooperacions3:Promise<cajaserviciooperacion[]>;
    

   
    @OneToMany(type=>cajaserviciooperacion, cajaserviciooperacion=>cajaserviciooperacion.idmoneda,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajaserviciooperacions4:Promise<cajaserviciooperacion[]>;
    

   
    @OneToMany(type=>cajaserviciooperacion, cajaserviciooperacion=>cajaserviciooperacion.idcuenta,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajaserviciooperacions5:Promise<cajaserviciooperacion[]>;
    
}
