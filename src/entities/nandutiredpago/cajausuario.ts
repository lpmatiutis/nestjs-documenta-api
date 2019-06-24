import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {caja} from "./caja";
import {cajacierre} from "./cajacierre";
import {cajausuariohistorico} from "./cajausuariohistorico";


@Entity("cajausuario",{schema:"reddepago" } )
export class cajausuario extends BaseEntity {

   
    @ManyToOne(type=>caja, caja=>caja.cajausuarios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<caja | null>;

    @RelationId((cajausuario: cajausuario) => cajausuario.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>caja, caja=>caja.cajausuarios2,{ primary:true, nullable:false, })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<caja | null>;

    @RelationId((cajausuario: cajausuario) => cajausuario.idcliente)
    idclienteId: Promise<number[]>;

   
    @ManyToOne(type=>caja, caja=>caja.cajausuarios3,{ primary:true, nullable:false, })
    @JoinColumn({ name:'idsucursal'})
    idsucursal:Promise<caja | null>;

    @RelationId((cajausuario: cajausuario) => cajausuario.idsucursal)
    idsucursalId: Promise<number[]>;

   
    @ManyToOne(type=>caja, caja=>caja.cajausuarios4,{ primary:true, nullable:false, })
    @JoinColumn({ name:'idcaja'})
    idcaja:Promise<caja | null>;

    @RelationId((cajausuario: cajausuario) => cajausuario.idcaja)
    idcajaId: Promise<number[]>;

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idusuario"
        })
    idusuario:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"idhorario"
        })
    idhorario:number;
        

    @Column("date",{ 
        nullable:false,
        name:"fecdesde"
        })
    fecdesde:string;
        

    @Column("date",{ 
        nullable:true,
        name:"fechasta"
        })
    fechasta:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:1000,
        name:"nota"
        })
    nota:string;
        

    @Column("date",{ 
        nullable:false,
        default: () => "now()",
        name:"aud_fecalta"
        })
    aud_fecalta:string;
        

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
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("integer",{ 
        nullable:true,
        name:"idusuariobaja"
        })
    idusuariobaja:number | null;
        

   
    @OneToMany(type=>cajacierre, cajacierre=>cajacierre.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajacierres:Promise<cajacierre[]>;
    

   
    @OneToMany(type=>cajacierre, cajacierre=>cajacierre.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajacierres2:Promise<cajacierre[]>;
    

   
    @OneToMany(type=>cajacierre, cajacierre=>cajacierre.idsucursal,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajacierres3:Promise<cajacierre[]>;
    

   
    @OneToMany(type=>cajacierre, cajacierre=>cajacierre.idcaja,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajacierres4:Promise<cajacierre[]>;
    

   
    @OneToMany(type=>cajacierre, cajacierre=>cajacierre.idusuario,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajacierres5:Promise<cajacierre[]>;
    

   
    @OneToMany(type=>cajausuariohistorico, cajausuariohistorico=>cajausuariohistorico.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajausuariohistoricos:Promise<cajausuariohistorico[]>;
    

   
    @OneToMany(type=>cajausuariohistorico, cajausuariohistorico=>cajausuariohistorico.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajausuariohistoricos2:Promise<cajausuariohistorico[]>;
    

   
    @OneToMany(type=>cajausuariohistorico, cajausuariohistorico=>cajausuariohistorico.idsucursal,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajausuariohistoricos3:Promise<cajausuariohistorico[]>;
    

   
    @OneToMany(type=>cajausuariohistorico, cajausuariohistorico=>cajausuariohistorico.idcaja,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajausuariohistoricos4:Promise<cajausuariohistorico[]>;
    

   
    @OneToMany(type=>cajausuariohistorico, cajausuariohistorico=>cajausuariohistorico.idusuario,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajausuariohistoricos5:Promise<cajausuariohistorico[]>;
    
}
