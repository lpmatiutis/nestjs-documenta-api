import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {archivos_ae} from "./archivos_ae";


@Entity("estados_archivos_ae",{schema:"redcobrosjp" } )
export class estados_archivos_ae extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:19,
        scale:2,
        name:"id_estado_archivo_ae"
        })
    id_estado_archivo_ae:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion"
        })
    descripcion:string | null;
        

   
    @OneToMany(type=>archivos_ae, archivos_ae=>archivos_ae.idEstadoAchivoAe)
    archivosAes:Promise<archivos_ae[]>;
    
}
