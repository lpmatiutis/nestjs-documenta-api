import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("contactos",{schema:"redcobrosjp" } )
export class contactos extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_contacto"
        })
    id_contacto:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"facturador"
        })
    facturador:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"contacto"
        })
    contacto:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"email"
        })
    email:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        default: () => "'S'",
        name:"activo"
        })
    activo:string;
        
}
