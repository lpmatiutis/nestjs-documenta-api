import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("localidades_vox",{schema:"redcobrosjp" } )
export class localidades_vox extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary: true,
        name:"id_localidad"
        })
    id_localidad:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"descripcion"
        })
    descripcion:string | null;
        
}
