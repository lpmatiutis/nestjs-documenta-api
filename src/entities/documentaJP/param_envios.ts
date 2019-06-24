import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("param_envios",{schema:"redcobrosjp" } )
export class param_envios extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:12,
        default: () => "'NULL'",
        name:"referencia"
        })
    referencia:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"monto_enviado"
        })
    monto_enviado:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"monto_tope"
        })
    monto_tope:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        primary:true,
        name:"fecha"
        })
    fecha:Date;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:12,
        name:"tipo_ref"
        })
    tipo_ref:string;
        
}
