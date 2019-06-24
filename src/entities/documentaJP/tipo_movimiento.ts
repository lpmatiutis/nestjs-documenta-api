import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tipo_movimiento",{schema:"redcobrosjp" } )
export class tipo_movimiento extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:19,
        scale:2,
        name:"id_tipo_movimiento"
        })
    id_tipo_movimiento:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        
}
