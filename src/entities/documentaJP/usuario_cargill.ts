import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("usuario_cargill",{schema:"redcobrosjp" } )
@Index("usuario_cargill_nombre_key",["nombre",],{unique:true})
export class usuario_cargill extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:20,
        name:"usuario"
        })
    usuario:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:40,
        name:"pass"
        })
    pass:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"nombre"
        })
    nombre:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"apellido"
        })
    apellido:string | null;
        
}
