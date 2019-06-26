import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
// import {programa} from "./programa";


@Entity("tipoprograma",{schema:"base" } )
@Index("idx_uq_tipoprograma_codigo",["codigo",],{unique:true})
@Index("idx_uq_tipoprograma_descripcion",["descripcion",],{unique:true})
export class tipoprograma extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtipoprograma"
        })
    idtipoprograma:number;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:5,
        name:"codigo"
        })
    codigo:string;
        

   
    // @OneToMany(type=>programa, programa=>programa.idtipoprograma,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    // programas:Promise<programa[]>;
    
}
