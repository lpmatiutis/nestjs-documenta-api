import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("credicity_det",{schema:"redcobrosjp" } )
export class credicity_det extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary: true,
        length:12,
        name:"nrodoc"
        })
    nrodoc:string;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"nro_op"
        })
    nro_op:number | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"nro_cuo"
        })
    nro_cuo:number | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecvto"
        })
    fecvto:Date | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"monto_cuo"
        })
    monto_cuo:number | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"monto_cargos"
        })
    monto_cargos:number | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"monto_cajero"
        })
    monto_cajero:number | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"date_insert"
        })
    date_insert:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        default: () => "0",
        name:"estado"
        })
    estado:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"id_transaccion"
        })
    id_transaccion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"fecha_pago"
        })
    fecha_pago:string | null;
        
}
