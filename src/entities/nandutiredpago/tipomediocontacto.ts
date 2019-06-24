import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {clientecontactomedio} from "./clientecontactomedio";


@Entity("tipomediocontacto",{schema:"reddepago" } )
@Index("idx_uq_tipomediocontacto_descripcion",["descripcion",],{unique:true})
export class tipomediocontacto extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtipomediocontacto"
        })
    idtipomediocontacto:number;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @OneToMany(type=>clientecontactomedio, clientecontactomedio=>clientecontactomedio.idtipomediocontacto)
    clientecontactomedios:Promise<clientecontactomedio[]>;
    
}
