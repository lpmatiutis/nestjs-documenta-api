import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {persona} from "./persona";


@Entity("personafisica",{schema:"base" } )
export class personafisica extends BaseEntity {

   
    @OneToOne(type=>persona, persona=>persona.personafisica,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<persona | null>;

    @RelationId((personafisica: personafisica) => personafisica.idpersona)
    idpersonaId: Promise<number>;

    @Column("integer",{ 
        nullable:true,
        name:"idpais"
        })
    idpais:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"idprofesion"
        })
    idprofesion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"sexo"
        })
    sexo:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"idlocalidad"
        })
    idlocalidad:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"direccion"
        })
    direccion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"lugarnacimiento"
        })
    lugarnacimiento:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"nombrepadre"
        })
    nombrepadre:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"nombremadre"
        })
    nombremadre:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"nombreconyuge"
        })
    nombreconyuge:string | null;
        
}
