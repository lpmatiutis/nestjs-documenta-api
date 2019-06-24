import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {red} from "./red";
import {servicio} from "./servicio";
import {tipo_cobro} from "./tipo_cobro";
import {dist_clearing_fact} from "./dist_clearing_fact";


@Entity("clearing_facturador",{schema:"redcobrosjp" } )
export class clearing_facturador extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_clearing_facturador"
        })
    id_clearing_facturador:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha"
        })
    fecha:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_acreditacion"
        })
    fecha_acreditacion:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora_creacion"
        })
    fecha_hora_creacion:Date;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"monto_total"
        })
    monto_total:number;
        

   
    @ManyToOne(type=>red, red=>red.clearingFacturadors,{  nullable:false, })
    @JoinColumn({ name:'red'})
    red:Promise<red | null>;

    @RelationId((clearing_facturador: clearing_facturador) => clearing_facturador.red)
    redId: Promise<string[]>;

   
    @ManyToOne(type=>servicio, servicio=>servicio.clearingFacturadors,{  nullable:false, })
    @JoinColumn({ name:'servicio'})
    servicio:Promise<servicio | null>;

    @RelationId((clearing_facturador: clearing_facturador) => clearing_facturador.servicio)
    servicioId: Promise<string[]>;

   
    @ManyToOne(type=>tipo_cobro, tipo_cobro=>tipo_cobro.clearingFacturadors,{  nullable:false, })
    @JoinColumn({ name:'tipo_cobro'})
    tipoCobro:Promise<tipo_cobro | null>;

    @RelationId((clearing_facturador: clearing_facturador) => clearing_facturador.tipoCobro)
    tipoCobroId: Promise<string[]>;

   
    @OneToMany(type=>dist_clearing_fact, dist_clearing_fact=>dist_clearing_fact.clearingFacturador)
    distClearingFacts:Promise<dist_clearing_fact[]>;
    
}
