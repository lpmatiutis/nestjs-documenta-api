import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("corte",{schema:"redcobrosjp" } )
export class corte extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_corte"
        })
    id_corte:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_corte"
        })
    fecha_corte:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_hora_corte"
        })
    fecha_hora_corte:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"descripcion"
        })
    descripcion:string | null;
        
}
