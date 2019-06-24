import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {aplicacion} from "./aplicacion";
import {permiso_de_rol} from "./permiso_de_rol";


@Entity("permiso",{schema:"redcobrosjp" } )
export class permiso extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_permiso"
        })
    id_permiso:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"codigo_permiso"
        })
    codigo_permiso:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"seccion"
        })
    seccion:string;
        

   
    @ManyToOne(type=>aplicacion, aplicacion=>aplicacion.permisos,{  })
    @JoinColumn({ name:'aplicacion'})
    aplicacion:Promise<aplicacion | null>;

    @RelationId((permiso: permiso) => permiso.aplicacion)
    aplicacionId: Promise<string[]>;

   
    @OneToMany(type=>permiso_de_rol, permiso_de_rol=>permiso_de_rol.permiso)
    permisoDeRols:Promise<permiso_de_rol[]>;
    
}
