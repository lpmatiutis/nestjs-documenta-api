import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicios_batch} from "./servicios_batch";


@Entity("repositorios",{schema:"redcobrosjp" } )
export class repositorios extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:38,
        scale:0,
        name:"id_repositorio"
        })
    id_repositorio:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"host_repo"
        })
    host_repo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"puerto"
        })
    puerto:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"usuario"
        })
    usuario:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"password_repo"
        })
    password_repo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"tipo"
        })
    tipo:string | null;
        

   
    @OneToMany(type=>servicios_batch, servicios_batch=>servicios_batch.idRepositorio)
    serviciosBatchs:Promise<servicios_batch[]>;
    
}
