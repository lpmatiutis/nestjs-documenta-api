import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tmp_trx_gestion",{schema:"redcobrosjp" } )
export class tmp_trx_gestion extends BaseEntity {

    @Column("bigint",{ 
        nullable:true,
        primary: true,
        name:"id_transaccion"
        })
    id_transaccion:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_gestion_vieja"
        })
    id_gestion_vieja:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_gestion_nueva"
        })
    id_gestion_nueva:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_usuario_viejo"
        })
    id_usuario_viejo:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_usuario_nuevo"
        })
    id_usuario_nuevo:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"aud_date"
        })
    aud_date:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_terminal_nueva"
        })
    id_terminal_nueva:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_terminal_vieja"
        })
    id_terminal_vieja:string | null;
        
}
