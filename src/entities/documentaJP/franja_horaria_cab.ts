import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {franja_horaria_det} from "./franja_horaria_det";
import {usuario_terminal} from "./usuario_terminal";


@Entity("franja_horaria_cab",{schema:"redcobrosjp" } )
export class franja_horaria_cab extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_franja_horaria_cab"
        })
    id_franja_horaria_cab:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"comentario"
        })
    comentario:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"recaudador"
        })
    recaudador:string | null;
        

   
    @OneToMany(type=>franja_horaria_det, franja_horaria_det=>franja_horaria_det.franjaHorariaCab)
    franjaHorariaDets:Promise<franja_horaria_det[]>;
    

   
    @OneToMany(type=>usuario_terminal, usuario_terminal=>usuario_terminal.franjaHorariaCab)
    usuarioTerminals:Promise<usuario_terminal[]>;
    
}
