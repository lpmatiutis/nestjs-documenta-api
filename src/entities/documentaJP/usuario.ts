import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {persona} from "./persona";
import {recaudador} from "./recaudador";
import {gestion} from "./gestion";
import {rol_de_usuario} from "./rol_de_usuario";
import {usuario_gestor} from "./usuario_gestor";
import {usuario_supervisor} from "./usuario_supervisor";
import {usuario_terminal} from "./usuario_terminal";


@Entity("usuario",{schema:"redcobrosjp" } )
export class usuario extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_usuario"
        })
    id_usuario:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"codigo"
        })
    codigo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"contrasenha"
        })
    contrasenha:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"es_supervisor"
        })
    es_supervisor:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombre_usuario"
        })
    nombre_usuario:string;
        

   
    @ManyToOne(type=>persona, persona=>persona.usuarios,{  nullable:false, })
    @JoinColumn({ name:'persona'})
    persona:Promise<persona | null>;

    @RelationId((usuario: usuario) => usuario.persona)
    personaId: Promise<string[]>;

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.usuarios,{  })
    @JoinColumn({ name:'recaudador'})
    recaudador:Promise<recaudador | null>;

    @RelationId((usuario: usuario) => usuario.recaudador)
    recaudadorId: Promise<string[]>;

    @Column("bigint",{ 
        nullable:true,
        name:"cod_externo"
        })
    cod_externo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"cambiar_password"
        })
    cambiar_password:string | null;
        

   
    @OneToMany(type=>gestion, gestion=>gestion.usuario)
    gestions:Promise<gestion[]>;
    

   
    @OneToMany(type=>rol_de_usuario, rol_de_usuario=>rol_de_usuario.usuario)
    rolDeUsuarios:Promise<rol_de_usuario[]>;
    

   
    @OneToMany(type=>usuario_gestor, usuario_gestor=>usuario_gestor.usuario)
    usuarioGestors:Promise<usuario_gestor[]>;
    

   
    @OneToMany(type=>usuario_supervisor, usuario_supervisor=>usuario_supervisor.supervisor)
    usuarioSupervisors:Promise<usuario_supervisor[]>;
    

   
    @OneToMany(type=>usuario_supervisor, usuario_supervisor=>usuario_supervisor.usuario)
    usuarioSupervisors2:Promise<usuario_supervisor[]>;
    

   
    @OneToMany(type=>usuario_terminal, usuario_terminal=>usuario_terminal.usuario)
    usuarioTerminals:Promise<usuario_terminal[]>;
    
}
