import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {aplicacion} from "./aplicacion";
import {permiso_de_rol} from "./permiso_de_rol";
import {rol_de_usuario} from "./rol_de_usuario";


@Entity("rol",{schema:"redcobrosjp" } )
export class rol extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_rol"
        })
    id_rol:string;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:2,
        name:"codigo_rol"
        })
    codigo_rol:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion"
        })
    descripcion:string | null;
        

   
    @ManyToOne(type=>aplicacion, aplicacion=>aplicacion.rols,{  })
    @JoinColumn({ name:'aplicacion'})
    aplicacion:Promise<aplicacion | null>;

    @RelationId((rol: rol) => rol.aplicacion)
    aplicacionId: Promise<string[]>;

   
    @OneToMany(type=>permiso_de_rol, permiso_de_rol=>permiso_de_rol.rol)
    permisoDeRols:Promise<permiso_de_rol[]>;
    

   
    @OneToMany(type=>rol_de_usuario, rol_de_usuario=>rol_de_usuario.rol)
    rolDeUsuarios:Promise<rol_de_usuario[]>;
    
}
