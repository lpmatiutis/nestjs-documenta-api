import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {sector_evento} from "./sector_evento";


@Entity("evento",{schema:"redcobrosjp" } )
export class evento extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_evento"
        })
    id_evento:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_inicio"
        })
    fecha_inicio:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_fin"
        })
    fecha_fin:Date;
        

    @Column("bigint",{ 
        nullable:false,
        name:"entidad"
        })
    entidad:string;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"habilitado"
        })
    habilitado:string;
        

   
    @OneToMany(type=>sector_evento, sector_evento=>sector_evento.evento)
    sectorEventos:Promise<sector_evento[]>;
    
}
