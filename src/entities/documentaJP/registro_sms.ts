import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("registro_sms",{schema:"redcobrosjp" } )
export class registro_sms extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:38,
        scale:0,
        name:"id_sms"
        })
    id_sms:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:15,
        name:"numero"
        })
    numero:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:3,
        name:"puerto"
        })
    puerto:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:15,
        name:"estado"
        })
    estado:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:38,
        scale:0,
        name:"user_id"
        })
    user_id:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"estampa_de_tiempo"
        })
    estampa_de_tiempo:Date | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:38,
        scale:0,
        name:"id_transanccion_envio"
        })
    id_transanccion_envio:string | null;
        
}
