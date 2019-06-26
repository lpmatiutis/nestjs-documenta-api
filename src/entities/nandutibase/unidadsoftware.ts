import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {empresa} from "./empresa";
//import {programa} from "./programa";


@Entity("unidadsoftware",{schema:"base" } )
@Index("idx_uq_unidadsoftware_descripcion",["descripcion","idempresa",],{unique:true})
export class unidadsoftware extends BaseEntity {

   
    @ManyToOne(type=>empresa, empresa=>empresa.unidadsoftwares,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idempresa'})
    idempresa:Promise<empresa | null>;

    @RelationId((unidadsoftware: unidadsoftware) => unidadsoftware.idempresa)
    idempresaId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idunidadsoftware"
        })
    idunidadsoftware:number;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

   
    // @OneToMany(type=>programa, programa=>programa.idempresa,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    // programas:Promise<programa[]>;
    

   
    // @OneToMany(type=>programa, programa=>programa.idunidadsoftware,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    // programas2:Promise<programa[]>;
    
}
