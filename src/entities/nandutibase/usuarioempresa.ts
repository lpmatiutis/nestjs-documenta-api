import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {empresa} from "./empresa";
import {usuario} from "./usuario";
import {usuarioempresarol} from "./usuarioempresarol";


@Entity("usuarioempresa",{schema:"base" } )
export class usuarioempresa extends BaseEntity {

   
    @ManyToOne(type=>empresa, empresa=>empresa.usuarioempresas,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idempresa'})
    idempresa:Promise<empresa | null>;

    @RelationId((usuarioempresa: usuarioempresa) => usuarioempresa.idempresa)
    idempresaId: Promise<number[]>;

   
    @ManyToOne(type=>usuario, usuario=>usuario.usuarioempresas,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idusuario'})
    idusuario:Promise<usuario | null>;

    @RelationId((usuarioempresa: usuarioempresa) => usuarioempresa.idusuario)
    idusuarioId: Promise<number[]>;

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecultcancel"
        })
    fecultcancel:Date | null;
        

   
    @OneToMany(type=>usuarioempresarol, usuarioempresarol=>usuarioempresarol.idempresa,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    usuarioempresarols:Promise<usuarioempresarol[]>;
    

   
    @OneToMany(type=>usuarioempresarol, usuarioempresarol=>usuarioempresarol.idusuario,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    usuarioempresarols2:Promise<usuarioempresarol[]>;
    
}
