import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {usuario} from "./usuario";


@Entity("usuarioacceso",{schema:"base" } )
@Index("idx_usuarioacceso_ticketacceso",["idusuario","ticketacceso",],{unique:true})
@Index("usuarioacceso_idusuarioacceso_key",["idusuarioacceso",],{unique:true})
export class usuarioacceso extends BaseEntity {

   
    @ManyToOne(type=>usuario, usuario=>usuario.usuarioaccesos,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idusuario'})
    idusuario:Promise<usuario | null>;

    @RelationId((usuarioacceso: usuarioacceso) => usuarioacceso.idusuario)
    idusuarioId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"bigint", 
        //unique: true,
        name:"idusuarioacceso"
        })
    idusuarioacceso:string;
        

    @Column("text",{ 
        nullable:false,
        unique: true,
        name:"ticketacceso"
        })
    ticketacceso:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecvencticket"
        })
    fecvencticket:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecusoticket"
        })
    fecusoticket:Date | null;
        

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
        

    @Column("integer",{ 
        nullable:false,
        default: () => "0",
        name:"aud_idusuarioalta"
        })
    aud_idusuarioalta:number;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"aud_fecmodif"
        })
    aud_fecmodif:Date | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"aud_idusuariomodif"
        })
    aud_idusuariomodif:number | null;
        
}
