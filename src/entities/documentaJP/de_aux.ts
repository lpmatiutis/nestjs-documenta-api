import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("de_aux",{schema:"redcobrosjp" } )
export class de_aux extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary: true,
        name:"id_detalle_en_linea"
        })
    id_detalle_en_linea:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_ingreso"
        })
    fecha_ingreso:Date;
        

    @Column("smallint",{ 
        nullable:false,
        name:"id_servicio_carrier"
        })
    id_servicio_carrier:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"id_servicio"
        })
    id_servicio:number;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_transaccion"
        })
    id_transaccion:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_respuesta"
        })
    fecha_respuesta:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"cod_autorizacion"
        })
    cod_autorizacion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:3000,
        name:"mensaje_enviado"
        })
    mensaje_enviado:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:3000,
        name:"mensaje_recibido"
        })
    mensaje_recibido:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"id_respuesta_carrier"
        })
    id_respuesta_carrier:string | null;
        

    @Column("smallint",{ 
        nullable:false,
        name:"id_tipo_operacion"
        })
    id_tipo_operacion:number;
        
}
