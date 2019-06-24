import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transaccion_rc} from "./transaccion_rc";
import {transaccion} from "./transaccion";
import {homebankingcuenta} from "./homebankingcuenta";


@Entity("transaccion_hb",{schema:"redcobrosjp" } )
@Index("idx_uq_transaccion_hb_trx",["idtransaccion",],{unique:true})
@Index("idx_uq_transaccion_hb_trxset",["idtransaccionset",],{unique:true})
export class transaccion_hb extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"idtransaccionhb"
        })
    idtransaccionhb:string;
        

   
    @OneToOne(type=>transaccion_rc, transaccion_rc=>transaccion_rc.transaccionHb,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtransaccion'})
    idtransaccion:Promise<transaccion_rc | null>;

    @RelationId((transaccion_hb: transaccion_hb) => transaccion_hb.idtransaccion)
    idtransaccionId: Promise<string>;

   
    @OneToOne(type=>transaccion, transaccion=>transaccion.transaccionHb,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtransaccionset'})
    idtransaccionset:Promise<transaccion | null>;

    @RelationId((transaccion_hb: transaccion_hb) => transaccion_hb.idtransaccionset)
    idtransaccionsetId: Promise<string>;

   
    @ManyToOne(type=>homebankingcuenta, homebankingcuenta=>homebankingcuenta.transaccionHbs,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'codigohb'})
    codigohb:Promise<homebankingcuenta | null>;

    @RelationId((transaccion_hb: transaccion_hb) => transaccion_hb.codigohb)
    codigohbId: Promise<string[]>;

   
    @ManyToOne(type=>homebankingcuenta, homebankingcuenta=>homebankingcuenta.transaccionHbs2,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idhomebankingtipocuenta'})
    idhomebankingtipocuenta:Promise<homebankingcuenta | null>;

    @RelationId((transaccion_hb: transaccion_hb) => transaccion_hb.idhomebankingtipocuenta)
    idhomebankingtipocuentaId: Promise<number[]>;

   
    @ManyToOne(type=>homebankingcuenta, homebankingcuenta=>homebankingcuenta.transaccionHbs3,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'nrocuenta'})
    nrocuenta:Promise<homebankingcuenta | null>;

    @RelationId((transaccion_hb: transaccion_hb) => transaccion_hb.nrocuenta)
    nrocuentaId: Promise<string[]>;

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"activo"
        })
    activo:boolean;
        

    @Column("character varying",{ 
        nullable:true,
        length:90,
        name:"token"
        })
    token:string | null;
        
}
