import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("dias90_procesados",{schema:"redcobrosjp" } )
export class dias90_procesados extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:38,
        scale:0,
        name:"id_procesado"
        })
    id_procesado:string;
        

    @Column("numeric",{ 
        nullable:true,
        precision:38,
        scale:0,
        name:"id_transaccion_envio"
        })
    id_transaccion_envio:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:4,
        name:"estado"
        })
    estado:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_corte"
        })
    fecha_corte:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_proceso"
        })
    fecha_proceso:Date | null;
        
}
