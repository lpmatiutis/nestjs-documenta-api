import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("rua_trx",{schema:"redcobrosjp" } )
export class rua_trx extends BaseEntity {

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_operacion"
        })
    fecha_operacion:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_contable"
        })
    fecha_contable:Date;
        

    @Column("bigint",{ 
        nullable:false,
        name:"monto"
        })
    monto:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:30,
        name:"liquidacion"
        })
    liquidacion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"id_pago_banco"
        })
    id_pago_banco:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"cod_respuesta"
        })
    cod_respuesta:string | null;
        
}
