import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {clientecontacto} from "./clientecontacto";


@Entity("tipocontacto",{schema:"reddepago" } )
export class tipocontacto extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtipocontacto"
        })
    idtipocontacto:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @OneToMany(type=>clientecontacto, clientecontacto=>clientecontacto.idtipocontacto,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    clientecontactos:Promise<clientecontacto[]>;
    
}
