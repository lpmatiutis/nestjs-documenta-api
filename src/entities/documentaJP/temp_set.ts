import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("temp_set",{schema:"redcobrosjp" } )
export class temp_set extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_reg"
        })
    id_reg:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"ruc_nuevo"
        })
    ruc_nuevo:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"categoria"
        })
    categoria:string | null;
        
}
