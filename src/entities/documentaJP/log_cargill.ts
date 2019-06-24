import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("log_cargill",{schema:"redcobrosjp" } )
export class log_cargill extends BaseEntity {

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"usuario"
        })
    usuario:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        primary:true,
        name:"fecha"
        })
    fecha:Date;
        

    @Column("bigint",{ 
        nullable:true,
        name:"valor_anterior"
        })
    valor_anterior:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"valor_actual"
        })
    valor_actual:string | null;
        
}
