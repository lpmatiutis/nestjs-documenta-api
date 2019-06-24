import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {serviciometodoref} from "./serviciometodoref";


@Entity("tipovalor",{schema:"reddepago" } )
export class tipovalor extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtipovalor"
        })
    idtipovalor:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"clasejava"
        })
    clasejava:string | null;
        

   
    @OneToMany(type=>serviciometodoref, serviciometodoref=>serviciometodoref.idtipovalor,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    serviciometodorefs:Promise<serviciometodoref[]>;
    
}
