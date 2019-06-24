import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("rua_trx_conci",{schema:"redcobrosjp" } )
export class rua_trx_conci extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id_trx_rua"
        })
    id_trx_rua:number;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_transaccion"
        })
    id_transaccion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"fecha_op"
        })
    fecha_op:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"fecha_re"
        })
    fecha_re:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"id_pago"
        })
    id_pago:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"id_pj"
        })
    id_pj:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"monto"
        })
    monto:string | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"estado"
        })
    estado:number | null;
        
}
