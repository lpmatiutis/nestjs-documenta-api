import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {estados_archivos_ae} from "./estados_archivos_ae";
import {adelantos_efectivo} from "./adelantos_efectivo";


@Entity("archivos_ae",{schema:"redcobrosjp" } )
export class archivos_ae extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_archivo_ae"
        })
    id_archivo_ae:string;
        

    @Column("bytea",{ 
        nullable:true,
        name:"archivo"
        })
    archivo:Buffer | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha"
        })
    fecha:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_gestion"
        })
    id_gestion:string | null;
        

   
    @ManyToOne(type=>estados_archivos_ae, estados_archivos_ae=>estados_archivos_ae.archivosAes,{  })
    @JoinColumn({ name:'id_estado_achivo_ae'})
    idEstadoAchivoAe:Promise<estados_archivos_ae | null>;

    @RelationId((archivos_ae: archivos_ae) => archivos_ae.idEstadoAchivoAe)
    idEstadoAchivoAeId: Promise<string[]>;

   
    @OneToMany(type=>adelantos_efectivo, adelantos_efectivo=>adelantos_efectivo.idArchivoAe)
    adelantosEfectivos:Promise<adelantos_efectivo[]>;
    
}
