import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("registro_civil_relacion_prod",{schema:"redcobrosjp" } )
export class registro_civil_relacion_prod extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:3,
        scale:0,
        name:"producto_origen"
        })
    producto_origen:string;
        

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:3,
        scale:0,
        name:"producto_relacionado"
        })
    producto_relacionado:string;
        

    @Column("numeric",{ 
        nullable:false,
        precision:6,
        scale:0,
        name:"cantidad"
        })
    cantidad:string;
        
}
