import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("estructura_archivo_ae",{schema:"redcobrosjp" } )
export class estructura_archivo_ae extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_estructura_archivo"
        })
    id_estructura_archivo:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion_presentador"
        })
    descripcion_presentador:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"orden"
        })
    orden:string | null;
        
}
