import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {archivos_ae} from "./archivos_ae";


@Entity("adelantos_efectivo",{schema:"redcobrosjp" } )
export class adelantos_efectivo extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_adelanto_efectivo"
        })
    id_adelanto_efectivo:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"estado_transaccion"
        })
    estado_transaccion:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_fin"
        })
    fecha_fin:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_inicio"
        })
    fecha_inicio:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_trx_documenta"
        })
    id_trx_documenta:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"line"
        })
    line:string | null;
        

   
    @ManyToOne(type=>archivos_ae, archivos_ae=>archivos_ae.adelantosEfectivos,{  })
    @JoinColumn({ name:'id_archivo_ae'})
    idArchivoAe:Promise<archivos_ae | null>;

    @RelationId((adelantos_efectivo: adelantos_efectivo) => adelantos_efectivo.idArchivoAe)
    idArchivoAeId: Promise<string[]>;
}
