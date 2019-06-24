import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("log_auditoria",{schema:"redcobrosjp" } )
export class log_auditoria extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_log_auditoria"
        })
    id_log_auditoria:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_transaccion"
        })
    id_transaccion:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_usuario_sistema"
        })
    id_usuario_sistema:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"accion"
        })
    accion:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha"
        })
    fecha:Date | null;
        
}
