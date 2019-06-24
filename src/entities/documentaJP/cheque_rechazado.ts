import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cheque_rechazado",{schema:"redcobrosjp" } )
export class cheque_rechazado extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_transaccion"
        })
    id_transaccion:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:20,
        name:"nro_cheque"
        })
    nro_cheque:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"motivo"
        })
    motivo:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_envio"
        })
    fecha_envio:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        default: () => "'N'",
        name:"enviado"
        })
    enviado:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_servicio"
        })
    id_servicio:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_ingreso"
        })
    fecha_ingreso:Date | null;
        
}
