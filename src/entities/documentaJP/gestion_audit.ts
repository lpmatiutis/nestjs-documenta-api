import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {gestion} from "./gestion";


@Entity("gestion_audit",{schema:"redcobrosjp" } )
export class gestion_audit extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_gestion_audit"
        })
    id_gestion_audit:string;
        

   
    @ManyToOne(type=>gestion, gestion=>gestion.gestionAudits,{  nullable:false, })
    @JoinColumn({ name:'id_gestion'})
    idGestion:Promise<gestion | null>;

    @RelationId((gestion_audit: gestion_audit) => gestion_audit.idGestion)
    idGestionId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"codigo_hash"
        })
    codigo_hash:string;
        

    @Column("date",{ 
        nullable:false,
        default: () => "LOCALTIMESTAMP",
        name:"fecha_mod"
        })
    fecha_mod:string;
        
}
