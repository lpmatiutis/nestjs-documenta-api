import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("digito_recaudadores",{schema:"redcobrosjp" } )
export class digito_recaudadores extends BaseEntity {

    @Column("bigint",{ 
        nullable:true,
        primary: true,
        name:"id_recaudador"
        })
    id_recaudador:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"codigo_recaudador"
        })
    codigo_recaudador:string | null;
        
}
