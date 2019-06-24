import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {alias_servicio_facturador} from "./alias_servicio_facturador";


@Entity("dato_consulta",{schema:"redcobrosjp" } )
export class dato_consulta extends BaseEntity {

   
    @ManyToOne(type=>alias_servicio_facturador, alias_servicio_facturador=>alias_servicio_facturador.datoConsultas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_facturador'})
    idFacturador:Promise<alias_servicio_facturador | null>;

    @RelationId((dato_consulta: dato_consulta) => dato_consulta.idFacturador)
    idFacturadorId: Promise<string[]>;

   
    @ManyToOne(type=>alias_servicio_facturador, alias_servicio_facturador=>alias_servicio_facturador.datoConsultas2,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:Promise<alias_servicio_facturador | null>;

    @RelationId((dato_consulta: dato_consulta) => dato_consulta.idServicio)
    idServicioId: Promise<number[]>;

    @Column("integer",{ 
        nullable:false,
        name:"alias"
        })
    alias:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"referencia_buqueda"
        })
    referencia_buqueda:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:30,
        name:"referencia_pago"
        })
    referencia_pago:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("smallint",{ 
        nullable:false,
        name:"moneda"
        })
    moneda:number;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"monto"
        })
    monto:number;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"monto_vencido"
        })
    monto_vencido:number | null;
        

    @Column("real",{ 
        nullable:true,
        precision:24,
        name:"interes_moratorio"
        })
    interes_moratorio:number | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"vencimiento"
        })
    vencimiento:Date | null;
        

    @Column("character",{ 
        nullable:false,
        name:"cobrar_vencido"
        })
    cobrar_vencido:string;
        

    @Column("smallint",{ 
        nullable:false,
        name:"tipo_recargo"
        })
    tipo_recargo:number;
        

    @Column("character",{ 
        nullable:true,
        name:"pagar_mas_vencido"
        })
    pagar_mas_vencido:string | null;
        

    @Column("character",{ 
        nullable:false,
        name:"solo_efectivo"
        })
    solo_efectivo:string;
        

    @Column("character",{ 
        nullable:false,
        name:"anulable"
        })
    anulable:string;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"pendiente"
        })
    pendiente:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"mensaje"
        })
    mensaje:string | null;
        
}
