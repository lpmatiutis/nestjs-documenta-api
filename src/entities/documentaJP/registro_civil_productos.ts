import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("registro_civil_productos",{schema:"redcobrosjp" } )
export class registro_civil_productos extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:3,
        scale:0,
        name:"id_producto"
        })
    id_producto:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:6,
        name:"codigo"
        })
    codigo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:300,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "0",
        precision:9,
        scale:2,
        name:"tasa"
        })
    tasa:string;
        

    @Column("numeric",{ 
        nullable:false,
        precision:9,
        scale:2,
        name:"comision"
        })
    comision:string;
        

    @Column("numeric",{ 
        nullable:false,
        precision:9,
        scale:2,
        name:"precio_oficiales"
        })
    precio_oficiales:string;
        

    @Column("numeric",{ 
        nullable:false,
        precision:9,
        scale:2,
        name:"precio_publico"
        })
    precio_publico:string;
        

    @Column("numeric",{ 
        nullable:false,
        precision:9,
        scale:2,
        name:"precio_neto_oficiales"
        })
    precio_neto_oficiales:string;
        

    @Column("numeric",{ 
        nullable:false,
        precision:9,
        scale:2,
        name:"precio_neto_publico"
        })
    precio_neto_publico:string;
        
}
