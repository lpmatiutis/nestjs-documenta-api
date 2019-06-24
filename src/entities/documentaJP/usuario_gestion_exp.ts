import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("usuario_gestion_exp",{schema:"redcobrosjp" } )
export class usuario_gestion_exp extends BaseEntity {

    @Column("bigint",{ 
        nullable:true,
        primary: true,
        name:"id_usuario"
        })
    id_usuario:string | null;
        
}
