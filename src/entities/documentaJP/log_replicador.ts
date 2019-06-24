import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("log_replicador",{schema:"redcobrosjp" } )
export class log_replicador extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:255,
        name:"momento_replicacion"
        })
    momento_replicacion:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:255,
        name:"nombre_persistence_unit"
        })
    nombre_persistence_unit:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:255,
        name:"operacion"
        })
    operacion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion_error"
        })
    descripcion_error:string;
        
}
