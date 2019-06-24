import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("bristol_comprobantes",{schema:"redcobrosjp" } )
export class bristol_comprobantes extends BaseEntity {

    @Column("character",{ 
        nullable:false,
        primary:true,
        length:4,
        name:"cod_tp_comp"
        })
    cod_tp_comp:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:4,
        name:"prefijofact"
        })
    prefijofact:string;
        
}
