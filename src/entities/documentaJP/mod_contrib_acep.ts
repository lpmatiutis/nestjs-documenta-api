import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("mod_contrib_acep",{schema:"redcobrosjp" } )
export class mod_contrib_acep extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_mod_contrib_acep"
        })
    id_mod_contrib_acep:string;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:2,
        name:"mod_contrib_acep"
        })
    mod_contrib_acep:string | null;
        
}
