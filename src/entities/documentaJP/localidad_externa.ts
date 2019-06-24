import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("localidad_externa",{schema:"redcobrosjp" } )
export class localidad_externa extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"localidad_in"
        })
    localidad_in:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"localidad_ex"
        })
    localidad_ex:string;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"entidad"
        })
    entidad:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"descripcion"
        })
    descripcion:string | null;
        
}
