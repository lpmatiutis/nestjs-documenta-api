import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {gestion} from "./gestion";
import {servicio} from "./servicio";
import {boleta_pago_contrib} from "./boleta_pago_contrib";
import {form_contrib} from "./form_contrib";


@Entity("grupo",{schema:"redcobrosjp" } )
export class grupo extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_grupo"
        })
    id_grupo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"cerrado"
        })
    cerrado:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha"
        })
    fecha:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"hora_cierre"
        })
    hora_cierre:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"hora_inicio"
        })
    hora_inicio:Date;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_caja"
        })
    numero_caja:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"procesado"
        })
    procesado:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"proxima_posicion"
        })
    proxima_posicion:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"total_operaciones"
        })
    total_operaciones:string | null;
        

   
    @ManyToOne(type=>gestion, gestion=>gestion.grupos,{  nullable:false, })
    @JoinColumn({ name:'gestion'})
    gestion:Promise<gestion | null>;

    @RelationId((grupo: grupo) => grupo.gestion)
    gestionId: Promise<string[]>;

   
    @ManyToOne(type=>servicio, servicio=>servicio.grupos,{  nullable:false, })
    @JoinColumn({ name:'servicio'})
    servicio:Promise<servicio | null>;

    @RelationId((grupo: grupo) => grupo.servicio)
    servicioId: Promise<string[]>;

   
    @OneToMany(type=>boleta_pago_contrib, boleta_pago_contrib=>boleta_pago_contrib.grupo)
    boletaPagoContribs:Promise<boleta_pago_contrib[]>;
    

   
    @OneToMany(type=>form_contrib, form_contrib=>form_contrib.grupo)
    formContribs:Promise<form_contrib[]>;
    
}
