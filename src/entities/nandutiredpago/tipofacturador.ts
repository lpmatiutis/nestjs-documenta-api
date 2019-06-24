import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";
import {facturadortipofacturador} from "./facturadortipofacturador";


@Entity("tipofacturador",{schema:"reddepago" } )
@Index("idx_uq_tipofacturador_descripcion",["descripcion",],{unique:true})
@Index("idx_uq_tipofacturador_orden",["orden",])
export class tipofacturador extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtipofacturador"
        })
    idtipofacturador:number;
        

    @Column("character varying",{ 
        nullable:false,
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
        

    @Column("smallint",{ 
        nullable:true,
        name:"orden"
        })
    orden:number | null;
        

   
    @OneToMany(type=>facturador, facturador=>facturador.idtipofacturador,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    facturadors:Promise<facturador[]>;
    

   
    @OneToMany(type=>facturadortipofacturador, facturadortipofacturador=>facturadortipofacturador.idtipofacturador,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    facturadortipofacturadors:Promise<facturadortipofacturador[]>;
    
}
