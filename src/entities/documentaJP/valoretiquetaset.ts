import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("valoretiquetaset",{schema:"redcobrosjp" } )
export class valoretiquetaset extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"etiqueta"
        })
    etiqueta:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"valor"
        })
    valor:string | null;
        
}
