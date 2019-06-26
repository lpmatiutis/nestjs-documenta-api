import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
// import {programaobjeto} from "./programaobjeto";


@Entity("tipoobjeto",{schema:"base" } )
@Index("idx_uq_tipoobjeto_descripcion",["descripcion",],{unique:true})
export class tipoobjeto extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtipoobjeto"
        })
    idtipoobjeto:number;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("text",{ 
        nullable:true,
        name:"nota"
        })
    nota:string | null;
        

   
    // @OneToMany(type=>programaobjeto, programaobjeto=>programaobjeto.idtipoobjeto,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    // programaobjetos:Promise<programaobjeto[]>;
    
}
