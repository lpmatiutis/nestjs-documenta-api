import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("copaco_lotes",{schema:"redcobrosjp" } )
export class copaco_lotes extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:25,
        scale:0,
        name:"id_lote"
        })
    id_lote:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_lote"
        })
    fecha_lote:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"lote_abierto"
        })
    lote_abierto:string | null;
        
}
