import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("fidelidad_acl",{schema:"redcobrosjp" } )
export class fidelidad_acl extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:38,
        scale:0,
        name:"usuario"
        })
    usuario:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"nombre_usuario"
        })
    nombre_usuario:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"nombres_usu"
        })
    nombres_usu:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"apellidos_usu"
        })
    apellidos_usu:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:38,
        scale:0,
        name:"id_recaudador"
        })
    id_recaudador:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"recaudador"
        })
    recaudador:string | null;
        
}
