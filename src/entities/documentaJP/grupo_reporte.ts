import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("grupo_reporte",{schema:"redcobrosjp" } )
export class grupo_reporte extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_grupo"
        })
    id_grupo:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion"
        })
    descripcion:string | null;
        
}
