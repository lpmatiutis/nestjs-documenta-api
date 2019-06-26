import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {personafisica} from "./personafisica";
import {personajuridica} from "./personajuridica";
import {usuario} from "./usuario";


@Entity("persona",{schema:"base" } )
@Index("idx_uq_persona_tipodocnrodoc",["idtipodoc","nrodoc",],{unique:true})
@Index("idx_uq_persona_nrodoc",["nrodoc",],{unique:true})
export class persona extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idpersona"
        })
    idpersona:number;
        

    @Column("integer",{ 
        nullable:false,
        unique: true,
        name:"idtipodoc"
        })
    idtipodoc:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:40,
        name:"nrodoc"
        })
    nrodoc:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:1000,
        name:"nombre"
        })
    nombre:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:70,
        name:"apellido"
        })
    apellido:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"fecnac"
        })
    fecnac:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"obs"
        })
    obs:string | null;
        

   
    @OneToOne(type=>personafisica, personafisica=>personafisica.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    personafisica:Promise<personafisica | null>;


   
    @OneToOne(type=>personajuridica, personajuridica=>personajuridica.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    personajuridica:Promise<personajuridica | null>;


   
    @OneToMany(type=>usuario, usuario=>usuario.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    usuarios:Promise<usuario[]>;
    
}
