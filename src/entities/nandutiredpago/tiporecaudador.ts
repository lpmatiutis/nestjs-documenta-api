import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {recaudador} from "./recaudador";


@Entity("tiporecaudador",{schema:"reddepago" } )
@Index("idx_tiporecaudador_descripcion",["descripcion",],{unique:true})
export class tiporecaudador extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtiporecaudador"
        })
    idtiporecaudador:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @OneToMany(type=>recaudador, recaudador=>recaudador.idtiporecaudador,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    recaudadors:Promise<recaudador[]>;
    
}
