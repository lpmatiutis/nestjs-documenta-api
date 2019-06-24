import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("registro_imp_web",{schema:"redcobrosjp" } )
export class registro_imp_web extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_registro_imp_web"
        })
    id_registro_imp_web:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:19,
        name:"usuario"
        })
    usuario:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"evento"
        })
    evento:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:2000,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha"
        })
    fecha:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:2000,
        name:"motivo"
        })
    motivo:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"terminal"
        })
    terminal:string | null;
        
}
