import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("retransmitir_conti",{schema:"redcobrosjp" } )
export class retransmitir_conti extends BaseEntity {

    @Column("bigint",{ 
        nullable:true,
        primary: true,
        name:"id_transaccion"
        })
    id_transaccion:string | null;
        
}
