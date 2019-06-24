import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {rol} from "./rol";
import {usuario} from "./usuario";


@Entity("rol_de_usuario",{schema:"redcobrosjp" } )
export class rol_de_usuario extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_rol_de_usuario"
        })
    id_rol_de_usuario:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_asignacion"
        })
    fecha_asignacion:Date;
        

    @Column("bigint",{ 
        nullable:false,
        name:"usuario_asignador"
        })
    usuario_asignador:string;
        

   
    @ManyToOne(type=>rol, rol=>rol.rolDeUsuarios,{  nullable:false, })
    @JoinColumn({ name:'rol'})
    rol:Promise<rol | null>;

    @RelationId((rol_de_usuario: rol_de_usuario) => rol_de_usuario.rol)
    rolId: Promise<string[]>;

   
    @ManyToOne(type=>usuario, usuario=>usuario.rolDeUsuarios,{  nullable:false, })
    @JoinColumn({ name:'usuario'})
    usuario:Promise<usuario | null>;

    @RelationId((rol_de_usuario: rol_de_usuario) => rol_de_usuario.usuario)
    usuarioId: Promise<string[]>;
}
