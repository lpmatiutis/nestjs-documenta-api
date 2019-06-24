import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {terminal} from "./terminal";


@Entity("terminal_audit",{schema:"redcobrosjp" } )
export class terminal_audit extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_terminal_audit"
        })
    id_terminal_audit:string;
        

   
    @ManyToOne(type=>terminal, terminal=>terminal.terminalAudits,{  nullable:false, })
    @JoinColumn({ name:'id_terminal'})
    idTerminal:Promise<terminal | null>;

    @RelationId((terminal_audit: terminal_audit) => terminal_audit.idTerminal)
    idTerminalId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"codigo_hash"
        })
    codigo_hash:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        default: () => "LOCALTIMESTAMP",
        name:"fecha_mod"
        })
    fecha_mod:Date;
        
}
