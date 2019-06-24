import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {repositorios} from "./repositorios";
import {archivos_procesados} from "./archivos_procesados";


@Entity("servicios_batch",{schema:"redcobrosjp" } )
export class servicios_batch extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:38,
        scale:0,
        name:"id_servicio_batch"
        })
    id_servicio_batch:string;
        

   
    @ManyToOne(type=>repositorios, repositorios=>repositorios.serviciosBatchs,{  })
    @JoinColumn({ name:'id_repositorio'})
    idRepositorio:Promise<repositorios | null>;

    @RelationId((servicios_batch: servicios_batch) => servicios_batch.idRepositorio)
    idRepositorioId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"path_repositorio"
        })
    path_repositorio:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"path_backup"
        })
    path_backup:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"procedimiento"
        })
    procedimiento:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"activo"
        })
    activo:string | null;
        

   
    @OneToMany(type=>archivos_procesados, archivos_procesados=>archivos_procesados.idServicioBatch)
    archivosProcesadoss:Promise<archivos_procesados[]>;
    
}
