import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("configuraciones_ae",{schema:"redcobrosjp" } )
export class configuraciones_ae extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_configuracion"
        })
    id_configuracion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"codigo"
        })
    codigo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"valor"
        })
    valor:string | null;
        
}
