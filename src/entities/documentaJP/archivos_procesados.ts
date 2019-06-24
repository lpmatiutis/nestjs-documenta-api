import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicios_batch} from "./servicios_batch";


@Entity("archivos_procesados",{schema:"redcobrosjp" } )
export class archivos_procesados extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:38,
        scale:0,
        name:"id_archivo_procesado"
        })
    id_archivo_procesado:string;
        

   
    @ManyToOne(type=>servicios_batch, servicios_batch=>servicios_batch.archivosProcesadoss,{  })
    @JoinColumn({ name:'id_servicio_batch'})
    idServicioBatch:Promise<servicios_batch | null>;

    @RelationId((archivos_procesados: archivos_procesados) => archivos_procesados.idServicioBatch)
    idServicioBatchId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"nombre_archivo"
        })
    nombre_archivo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:2,
        name:"procesado"
        })
    procesado:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"observaciones"
        })
    observaciones:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha"
        })
    fecha:Date | null;
        
}
