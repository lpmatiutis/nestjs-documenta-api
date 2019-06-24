import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("quinta_ruotti_deuda",{schema:"redcobrosjp" } )
export class quinta_ruotti_deuda extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"ruc_o_ci"
        })
    ruc_o_ci:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"persona"
        })
    persona:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"departamento"
        })
    departamento:string;
        
}
