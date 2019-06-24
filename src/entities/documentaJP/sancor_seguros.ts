import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("sancor_seguros",{schema:"redcobrosjp" } )
export class sancor_seguros extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:38,
        scale:0,
        name:"id_sancor"
        })
    id_sancor:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"nombre"
        })
    nombre:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"tipo_docu"
        })
    tipo_docu:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"tipo_entidad"
        })
    tipo_entidad:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"identificador"
        })
    identificador:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"ramo_poliza"
        })
    ramo_poliza:string;
        

    @Column("numeric",{ 
        nullable:false,
        precision:38,
        scale:0,
        name:"nro_recibo"
        })
    nro_recibo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"moneda"
        })
    moneda:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"monto"
        })
    monto:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"vencimiento_recibo"
        })
    vencimiento_recibo:string;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "0",
        precision:38,
        scale:0,
        name:"estado_pago"
        })
    estado_pago:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:38,
        scale:0,
        name:"id_transaccion"
        })
    id_transaccion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"fecha_proceso"
        })
    fecha_proceso:string | null;
        
}
