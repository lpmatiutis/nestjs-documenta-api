import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("control_trx",{schema:"redcobrosjp" } )
export class control_trx extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:50,
        name:"id_control_trx"
        })
    id_control_trx:string;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"entidad"
        })
    entidad:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"transaccion_rc"
        })
    transaccion_rc:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        default: () => "'N'",
        name:"estado"
        })
    estado:string | null;
        
}
