import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {redoperacion} from "./redoperacion";


@Entity("tipopago",{schema:"reddepago" } )
@Index("idx_uq_tipopago_codigo",["codigo",],{unique:true})
@Index("idx_uq_tipopago_descripcion",["descripcion",],{unique:true})
export class tipopago extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"smallint", 
        name:"idtipopago"
        })
    idtipopago:number;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:5,
        name:"codigo"
        })
    codigo:string;
        

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
        

   
    @OneToMany(type=>redoperacion, redoperacion=>redoperacion.idtipopago,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    redoperacions:Promise<redoperacion[]>;
    
}
