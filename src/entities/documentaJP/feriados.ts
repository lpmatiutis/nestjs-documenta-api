import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("feriados",{schema:"redcobrosjp" } )
export class feriados extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_feriado"
        })
    id_feriado:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"cadena_fecha"
        })
    cadena_fecha:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha"
        })
    fecha:Date;
        

    @Column("bigint",{ 
        nullable:false,
        name:"flag_obviar_anho"
        })
    flag_obviar_anho:string;
        
}
