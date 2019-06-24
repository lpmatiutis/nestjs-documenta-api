import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("contactos_documenta",{schema:"redcobrosjp" } )
export class contactos_documenta extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:38,
        scale:0,
        name:"id_contacto"
        })
    id_contacto:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"nombre"
        })
    nombre:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"apellido"
        })
    apellido:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"email"
        })
    email:string | null;
        
}
