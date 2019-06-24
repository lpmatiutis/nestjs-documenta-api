import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tiposerviciometodo",{schema:"reddepago" } )
export class tiposerviciometodo extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"idtiposerviciometodo"
        })
    idtiposerviciometodo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("text",{ 
        nullable:true,
        name:"obs"
        })
    obs:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"codigo"
        })
    codigo:string | null;
        
}
