import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {persona} from "./persona";
import {usuarioacceso} from "./usuarioacceso";
import {usuarioaprobacion} from "./usuarioaprobacion";
import {usuariocliente} from "./usuariocliente";
import {usuarioempresa} from "./usuarioempresa";
import {usuarioempresarol} from "./usuarioempresarol";
import {usuarionotificacion} from "./usuarionotificacion";


@Entity("usuario",{schema:"base" } )
@Index("idx_uq_usuario_correo",["correo",])
@Index("idx_uq_usuario_usuario",["username",],{unique:true})
export class usuario extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idusuario"
        })
    idusuario:number;
        

   
    @ManyToOne(type=>persona, persona=>persona.usuarios,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<persona | null>;

    @RelationId((usuario: usuario) => usuario.idpersona)
    idpersonaId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:50,
        name:"username"
        })
    username:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"password"
        })
    password:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        default: () => "now()",
        name:"aud_fecalta"
        })
    aud_fecalta:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"aud_fecmodif"
        })
    aud_fecmodif:Date | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"aud_idusuarioalta"
        })
    aud_idusuarioalta:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"aud_idusuariomodif"
        })
    aud_idusuariomodif:number | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"lastaccess"
        })
    lastaccess:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"idusuariodocumenta"
        })
    idusuariodocumenta:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"correo"
        })
    correo:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:50,
        default: () => "'NEW_REGISTERED'",
        name:"tipoestado"
        })
    tipoestado:string;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "0",
        name:"diasvencpwd"
        })
    diasvencpwd:number;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"ultimocambiopwd"
        })
    ultimocambiopwd:Date | null;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "0",
        name:"intentosdeacceso"
        })
    intentosdeacceso:number;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fechabloqueoacceso"
        })
    fechabloqueoacceso:Date | null;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "0",
        name:"cantcambiopwd"
        })
    cantcambiopwd:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:11,
        name:"nrocel"
        })
    nrocel:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecbaja"
        })
    fecbaja:Date | null;
        

   
    @OneToMany(type=>usuarioacceso, usuarioacceso=>usuarioacceso.idusuario,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    usuarioaccesos:Promise<usuarioacceso[]>;
    

   
    @OneToMany(type=>usuarioaprobacion, usuarioaprobacion=>usuarioaprobacion.idusuario,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    usuarioaprobacions:Promise<usuarioaprobacion[]>;
    

   
    @OneToMany(type=>usuariocliente, usuariocliente=>usuariocliente.idusuario,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    usuarioclientes:Promise<usuariocliente[]>;
    

   
    @OneToMany(type=>usuarioempresa, usuarioempresa=>usuarioempresa.idusuario,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    usuarioempresas:Promise<usuarioempresa[]>;
    

   
    @OneToMany(type=>usuarioempresarol, usuarioempresarol=>usuarioempresarol.usuariorealm,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    usuarioempresarols:Promise<usuarioempresarol[]>;
    

   
    @OneToMany(type=>usuarionotificacion, usuarionotificacion=>usuarionotificacion.idusuario,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    usuarionotificacions:Promise<usuarionotificacion[]>;
    
}
