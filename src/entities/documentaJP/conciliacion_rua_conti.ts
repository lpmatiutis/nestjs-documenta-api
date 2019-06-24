import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transaccion_rc} from "./transaccion_rc";


@Entity("conciliacion_rua_conti",{schema:"redcobrosjp" } )
export class conciliacion_rua_conti extends BaseEntity {

   
    @OneToOne(type=>transaccion_rc, transaccion_rc=>transaccion_rc.conciliacionRuaConti,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_transaccion'})
    idTransaccion:Promise<transaccion_rc | null>;

    @RelationId((conciliacion_rua_conti: conciliacion_rua_conti) => conciliacion_rua_conti.idTransaccion)
    idTransaccionId: Promise<string>;

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"liquidacion"
        })
    liquidacion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"id_pago_banco"
        })
    id_pago_banco:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"id_pj"
        })
    id_pj:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"id_banco"
        })
    id_banco:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"en_rua"
        })
    en_rua:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"en_banco"
        })
    en_banco:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        default: () => "LOCALTIMESTAMP",
        name:"fecha"
        })
    fecha:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"respuesta"
        })
    respuesta:string | null;
        
}
