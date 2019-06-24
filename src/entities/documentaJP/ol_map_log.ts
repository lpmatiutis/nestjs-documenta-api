import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {ol_log} from "./ol_log";


@Entity("ol_map_log",{schema:"redcobrosjp" } )
export class ol_map_log extends BaseEntity {

   
    @ManyToOne(type=>ol_log, ol_log=>ol_log.olMapLogs,{ primary:true, nullable:false, })
    @JoinColumn({ name:'ol_log'})
    olLog:Promise<ol_log | null>;

    @RelationId((ol_map_log: ol_map_log) => ol_map_log.olLog)
    olLogId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:100,
        name:"clave"
        })
    clave:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:4000,
        name:"valor"
        })
    valor:string | null;
        
}
