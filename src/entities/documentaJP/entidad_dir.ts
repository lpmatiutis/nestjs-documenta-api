import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("entidad_dir",{schema:"redcobrosjp" } )
export class entidad_dir extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_entidad_dir"
        })
    id_entidad_dir:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"direccion"
        })
    direccion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"estado"
        })
    estado:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_entidad"
        })
    id_entidad:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_grupo"
        })
    id_grupo:string;
        
}
