import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {suscriptor_evento} from "./suscriptor_evento";


@Entity("suscriptor",{schema:"redcobrosjp" } )
export class suscriptor extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_suscriptor"
        })
    id_suscriptor:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"nombre"
        })
    nombre:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"apellido"
        })
    apellido:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"email"
        })
    email:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"telefono"
        })
    telefono:string | null;
        

   
    @OneToMany(type=>suscriptor_evento, suscriptor_evento=>suscriptor_evento.suscriptor)
    suscriptorEventos:Promise<suscriptor_evento[]>;
    
}
