import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tipodoc",{schema:"base" } )
@Index("tipodoc_descripcion_key",["descripcion",],{unique:true})
export class tipodoc extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtipodoc"
        })
    idtipodoc:number;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"codigo"
        })
    codigo:string | null;
        
}
