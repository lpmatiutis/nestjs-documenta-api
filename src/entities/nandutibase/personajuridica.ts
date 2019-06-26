import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {persona} from "./persona";


@Entity("personajuridica",{schema:"base" } )
@Index("idx_uq_personajuridica_ruc",["ruc",],{unique:true})
export class personajuridica extends BaseEntity {

   
    @OneToOne(type=>persona, persona=>persona.personajuridica,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<persona | null>;

    @RelationId((personajuridica: personajuridica) => personajuridica.idpersona)
    idpersonaId: Promise<number>;

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:15,
        name:"ruc"
        })
    ruc:string;
        

    @Column("smallint",{ 
        nullable:true,
        name:"digitoverificador"
        })
    digitoverificador:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"rucanterior"
        })
    rucanterior:string | null;
        

    @Column("smallint",{ 
        nullable:false,
        name:"mescierre"
        })
    mescierre:number;
        

    @Column("smallint",{ 
        nullable:false,
        name:"modalidad"
        })
    modalidad:number;
        

    @Column("smallint",{ 
        nullable:false,
        name:"tipocontribuyente"
        })
    tipocontribuyente:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"estado"
        })
    estado:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"mensaje"
        })
    mensaje:string | null;
        
}
