import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("transaccion_rc_log",{schema:"redcobrosjp" } )
export class transaccion_rc_log extends BaseEntity {

    @Column("bigint",{ 
        nullable:true,
        primary: true,
        name:"id_transaccion"
        })
    id_transaccion:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_gestion"
        })
    id_gestion:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_usuario"
        })
    id_usuario:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_recaudador"
        })
    id_recaudador:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"fecha"
        })
    fecha:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_terminal_jp"
        })
    id_terminal_jp:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"recaudador_desc"
        })
    recaudador_desc:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"terminal_desc"
        })
    terminal_desc:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_terminal_nanduti"
        })
    id_terminal_nanduti:string | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"bandana"
        })
    bandana:number | null;
        
}
