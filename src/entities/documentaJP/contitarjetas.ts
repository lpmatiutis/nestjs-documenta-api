import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("contitarjetas",{schema:"redcobrosjp" } )
export class contitarjetas extends BaseEntity {

    @Column("bigint",{ 
        nullable:true,
        primary: true,
        name:"id"
        })
    id:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"cuenta"
        })
    cuenta:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_cobro"
        })
    fecha_cobro:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"numero_tarjeta"
        })
    numero_tarjeta:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"cod_cliente"
        })
    cod_cliente:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"monto"
        })
    monto:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"idtransaccion"
        })
    idtransaccion:string | null;
        
}
