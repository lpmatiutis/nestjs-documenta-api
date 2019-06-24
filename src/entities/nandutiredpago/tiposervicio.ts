import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {serviciotiposervicio} from "./serviciotiposervicio";


@Entity("tiposervicio",{schema:"reddepago" } )
@Index("idx_uq_tiposervicio_descripcion",["descripcion",],{unique:true})
export class tiposervicio extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtiposervicio"
        })
    idtiposervicio:number;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"uiicono"
        })
    uiicono:string | null;
        

   
    @OneToMany(type=>serviciotiposervicio, serviciotiposervicio=>serviciotiposervicio.idtiposervicio,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    serviciotiposervicios:Promise<serviciotiposervicio[]>;
    
}
