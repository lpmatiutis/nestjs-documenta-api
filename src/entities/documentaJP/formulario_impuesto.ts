import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("formulario_impuesto",{schema:"redcobrosjp" } )
export class formulario_impuesto extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_formulario_impuesto"
        })
    id_formulario_impuesto:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"impuesto"
        })
    impuesto:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_formulario"
        })
    numero_formulario:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"obligacion"
        })
    obligacion:string | null;
        
}
