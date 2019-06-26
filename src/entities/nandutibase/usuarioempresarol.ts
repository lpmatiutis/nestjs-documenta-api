import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {rol} from "./rol";
import {usuarioempresa} from "./usuarioempresa";
import {usuario} from "./usuario";
//import {credencial} from "./credencial";


@Entity("usuarioempresarol",{schema:"base" } )
@Index("idx_uq_usuarioempresarol_usu_y_grupo",["gruporealm","idempresa","usuariorealm",],{unique:true})
export class usuarioempresarol extends BaseEntity {

   
    @ManyToOne(type=>rol, rol=>rol.usuarioempresarols,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idempresa'})
    idempresa:Promise<rol | null>;

    @RelationId((usuarioempresarol: usuarioempresarol) => usuarioempresarol.idempresa)
    idempresaId: Promise<number[]>;
    @ManyToOne(type=>usuarioempresa, usuarioempresa=>usuarioempresa.usuarioempresarols,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idempresa'})
    idempresaU:Promise<usuarioempresa | null>;

    @RelationId((usuarioempresarol: usuarioempresarol) => usuarioempresarol.idempresa)
    idempresaIdU: Promise<number[]>;

   
    @ManyToOne(type=>usuarioempresa, usuarioempresa=>usuarioempresa.usuarioempresarols2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idusuario'})
    idusuario:Promise<usuarioempresa | null>;

    @RelationId((usuarioempresarol: usuarioempresarol) => usuarioempresarol.idusuario)
    idusuarioId: Promise<number[]>;

   
    @ManyToOne(type=>rol, rol=>rol.usuarioempresarols2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idrol'})
    idrol:Promise<rol | null>;

    @RelationId((usuarioempresarol: usuarioempresarol) => usuarioempresarol.idrol)
    idrolId: Promise<number[]>;

   
    @ManyToOne(type=>usuario, usuario=>usuario.usuarioempresarols,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'usuariorealm'})
    usuariorealm:Promise<usuario | null>;

    @RelationId((usuarioempresarol: usuarioempresarol) => usuarioempresarol.usuariorealm)
    usuariorealmId: Promise<string[]>;

   
    @ManyToOne(type=>rol, rol=>rol.usuarioempresarols3,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'gruporealm'})
    gruporealm:Promise<rol | null>;

    @RelationId((usuarioempresarol: usuarioempresarol) => usuarioempresarol.gruporealm)
    gruporealmId: Promise<string[]>;

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"activo"
        })
    activo:boolean;
        

   
    // @OneToMany(type=>credencial, credencial=>credencial.idempresa,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    // credencials:Promise<credencial[]>;
    

   
    // @OneToMany(type=>credencial, credencial=>credencial.idusuario,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    // credencials2:Promise<credencial[]>;
    

   
    // @OneToMany(type=>credencial, credencial=>credencial.idrol,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    // credencials3:Promise<credencial[]>;
    
}
