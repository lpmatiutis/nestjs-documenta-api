import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("conciliacion_rua_conti2",{schema:"redcobrosjp" } )
export class conciliacion_rua_conti2 extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_transaccion"
        })
    id_transaccion:string;
        

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
        name:"fecha_habil"
        })
    fecha_habil:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_contable"
        })
    fecha_contable:Date | null;
        

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
