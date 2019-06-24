import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {localidad} from "./localidad";


@Entity("gestor_direcciones",{schema:"redcobrosjp" } )
export class gestor_direcciones extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        length:25,
        name:"id_gestor"
        })
    id_gestor:string;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_direccion"
        })
    id_direccion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"direccion"
        })
    direccion:string;
        

   
    @ManyToOne(type=>localidad, localidad=>localidad.gestorDireccioness,{  nullable:false, })
    @JoinColumn({ name:'localidad'})
    localidad:Promise<localidad | null>;

    @RelationId((gestor_direcciones: gestor_direcciones) => gestor_direcciones.localidad)
    localidadId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:false,
        length:25,
        name:"tipo_direccion"
        })
    tipo_direccion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:35,
        name:"telefono"
        })
    telefono:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:35,
        name:"celular"
        })
    celular:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"email"
        })
    email:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"empresa"
        })
    empresa:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_localidad"
        })
    id_localidad:string | null;
        
}
