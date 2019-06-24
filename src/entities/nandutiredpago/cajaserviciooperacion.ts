import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {serviciooperacion} from "./serviciooperacion";
import {caja} from "./caja";
import {clientecuenta} from "./clientecuenta";
import {tipodestinoticket} from "./tipodestinoticket";


@Entity("cajaserviciooperacion",{schema:"reddepago" } )
export class cajaserviciooperacion extends BaseEntity {

   
    @ManyToOne(type=>serviciooperacion, serviciooperacion=>serviciooperacion.cajaserviciooperacions,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idserviciooperacion'})
    idserviciooperacion:Promise<serviciooperacion | null>;

    @RelationId((cajaserviciooperacion: cajaserviciooperacion) => cajaserviciooperacion.idserviciooperacion)
    idserviciooperacionId: Promise<number[]>;

   
    @ManyToOne(type=>caja, caja=>caja.cajaserviciooperacions,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<caja | null>;

    @RelationId((cajaserviciooperacion: cajaserviciooperacion) => cajaserviciooperacion.idpersona)
    idpersonaId: Promise<number[]>;
    @ManyToOne(type=>clientecuenta, clientecuenta=>clientecuenta.cajaserviciooperacions,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersonac:Promise<clientecuenta | null>;

    @RelationId((cajaserviciooperacion: cajaserviciooperacion) => cajaserviciooperacion.idpersona)
    idpersonaIdc: Promise<number[]>;

   
    @ManyToOne(type=>caja, caja=>caja.cajaserviciooperacions2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<caja | null>;

    @RelationId((cajaserviciooperacion: cajaserviciooperacion) => cajaserviciooperacion.idcliente)
    idclienteId: Promise<number[]>;
    @ManyToOne(type=>clientecuenta, clientecuenta=>clientecuenta.cajaserviciooperacions2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idclientec:Promise<clientecuenta | null>;

    @RelationId((cajaserviciooperacion: cajaserviciooperacion) => cajaserviciooperacion.idcliente)
    idclienteIdc: Promise<number[]>;

   
    @ManyToOne(type=>caja, caja=>caja.cajaserviciooperacions3,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idsucursal'})
    idsucursal:Promise<caja | null>;

    @RelationId((cajaserviciooperacion: cajaserviciooperacion) => cajaserviciooperacion.idsucursal)
    idsucursalId: Promise<number[]>;

   
    @ManyToOne(type=>caja, caja=>caja.cajaserviciooperacions4,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcaja'})
    idcaja:Promise<caja | null>;

    @RelationId((cajaserviciooperacion: cajaserviciooperacion) => cajaserviciooperacion.idcaja)
    idcajaId: Promise<number[]>;

   
    @ManyToOne(type=>tipodestinoticket, tipodestinoticket=>tipodestinoticket.cajaserviciooperacions,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtipodestinoticket'})
    idtipodestinoticket:Promise<tipodestinoticket | null>;

    @RelationId((cajaserviciooperacion: cajaserviciooperacion) => cajaserviciooperacion.idtipodestinoticket)
    idtipodestinoticketId: Promise<number[]>;

   
    @ManyToOne(type=>clientecuenta, clientecuenta=>clientecuenta.cajaserviciooperacions3,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idbanco'})
    idbanco:Promise<clientecuenta | null>;

    @RelationId((cajaserviciooperacion: cajaserviciooperacion) => cajaserviciooperacion.idbanco)
    idbancoId: Promise<number[]>;

   
    @ManyToOne(type=>clientecuenta, clientecuenta=>clientecuenta.cajaserviciooperacions4,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idmoneda'})
    idmoneda:Promise<clientecuenta | null>;

    @RelationId((cajaserviciooperacion: cajaserviciooperacion) => cajaserviciooperacion.idmoneda)
    idmonedaId: Promise<number[]>;

   
    @ManyToOne(type=>clientecuenta, clientecuenta=>clientecuenta.cajaserviciooperacions5,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcuenta'})
    idcuenta:Promise<clientecuenta | null>;

    @RelationId((cajaserviciooperacion: cajaserviciooperacion) => cajaserviciooperacion.idcuenta)
    idcuentaId: Promise<number[]>;

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        
}
