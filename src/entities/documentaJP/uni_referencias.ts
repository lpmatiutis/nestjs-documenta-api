import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("uni_referencias",{schema:"redcobrosjp" } )
export class uni_referencias extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary: true,
        name:"id_referencia_uni"
        })
    id_referencia_uni:string;
        

    @Column("text",{ 
        nullable:true,
        name:"referencia"
        })
    referencia:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"estado"
        })
    estado:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_transaccion_rc"
        })
    id_transaccion_rc:string | null;
        
}
