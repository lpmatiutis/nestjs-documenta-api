import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("medilife",{schema:"redcobrosjp" } )
export class medilife extends BaseEntity {

    @Column("bigint",{ 
        nullable:true,
        primary: true,
        name:"id"
        })
    id:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"nombre"
        })
    nombre:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"cedula_ruc"
        })
    cedula_ruc:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:15,
        name:"nro_de_contrato"
        })
    nro_de_contrato:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"nro_de_socio"
        })
    nro_de_socio:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:15,
        name:"monto_cuota"
        })
    monto_cuota:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"vencimiento"
        })
    vencimiento:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_pago"
        })
    fecha_pago:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        default: () => "0",
        name:"estado_pago"
        })
    estado_pago:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_transaccion"
        })
    id_transaccion:string | null;
        
}
