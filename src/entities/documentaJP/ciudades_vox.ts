import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("ciudades_vox",{schema:"redcobrosjp" } )
export class ciudades_vox extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_ciudad"
        })
    id_ciudad:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_localidad"
        })
    id_localidad:string | null;
        
}
