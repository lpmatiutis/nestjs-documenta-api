import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {franja_horaria_cab} from "./franja_horaria_cab";
import {terminal} from "./terminal";
import {usuario} from "./usuario";
import {form_contrib} from "./form_contrib";


@Entity("usuario_terminal",{schema:"redcobrosjp" } )
export class usuario_terminal extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_usuario_terminal"
        })
    id_usuario_terminal:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"logueado"
        })
    logueado:string | null;
        

   
    @ManyToOne(type=>franja_horaria_cab, franja_horaria_cab=>franja_horaria_cab.usuarioTerminals,{  nullable:false, })
    @JoinColumn({ name:'franja_horaria_cab'})
    franjaHorariaCab:Promise<franja_horaria_cab | null>;

    @RelationId((usuario_terminal: usuario_terminal) => usuario_terminal.franjaHorariaCab)
    franjaHorariaCabId: Promise<string[]>;

   
    @ManyToOne(type=>terminal, terminal=>terminal.usuarioTerminals,{  nullable:false, })
    @JoinColumn({ name:'terminal'})
    terminal:Promise<terminal | null>;

    @RelationId((usuario_terminal: usuario_terminal) => usuario_terminal.terminal)
    terminalId: Promise<string[]>;

   
    @ManyToOne(type=>usuario, usuario=>usuario.usuarioTerminals,{  nullable:false, })
    @JoinColumn({ name:'usuario'})
    usuario:Promise<usuario | null>;

    @RelationId((usuario_terminal: usuario_terminal) => usuario_terminal.usuario)
    usuarioId: Promise<string[]>;

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_pase"
        })
    fecha_pase:Date | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"pase"
        })
    pase:number | null;
        

   
    @OneToMany(type=>form_contrib, form_contrib=>form_contrib.usuarioTerminalCarga)
    formContribs:Promise<form_contrib[]>;
    
}
