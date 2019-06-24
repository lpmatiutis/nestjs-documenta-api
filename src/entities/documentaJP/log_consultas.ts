import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";


@Entity("log_consultas",{schema:"redcobrosjp" } )
export class log_consultas extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id_log_consulta"
        })
    id_log_consulta:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_gestion"
        })
    id_gestion:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"id_facturador"
        })
    id_facturador:number | null;
        

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.logConsultass,{  nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:Promise<servicio_rc | null>;

    @RelationId((log_consultas: log_consultas) => log_consultas.idServicio)
    idServicioId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:false,
        length:300,
        name:"referencia_consulta"
        })
    referencia_consulta:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"cod_retorno"
        })
    cod_retorno:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:400,
        name:"mensaje_consulta"
        })
    mensaje_consulta:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        default: () => "now()",
        name:"fecha"
        })
    fecha:Date;
        

    @Column("text",{ 
        nullable:true,
        name:"xml"
        })
    xml:string | null;
        
}
