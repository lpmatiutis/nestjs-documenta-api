import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {persona} from "./persona";
import {entidad} from "./entidad";
import {cuenta} from "./cuenta";
import {red} from "./red";
import {registro_cheque} from "./registro_cheque";
import {transaccion} from "./transaccion";


@Entity("entidad_financiera",{schema:"redcobrosjp" } )
export class entidad_financiera extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_entidad_financiera"
        })
    id_entidad_financiera:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"numero_cuenta"
        })
    numero_cuenta:string | null;
        

   
    @ManyToOne(type=>persona, persona=>persona.entidadFinancieras,{  nullable:false, })
    @JoinColumn({ name:'contacto'})
    contacto:Promise<persona | null>;

    @RelationId((entidad_financiera: entidad_financiera) => entidad_financiera.contacto)
    contactoId: Promise<string[]>;

   
    @ManyToOne(type=>entidad, entidad=>entidad.entidadFinancieras,{  nullable:false, })
    @JoinColumn({ name:'entidad'})
    entidad:Promise<entidad | null>;

    @RelationId((entidad_financiera: entidad_financiera) => entidad_financiera.entidad)
    entidadId: Promise<string[]>;

    @Column("smallint",{ 
        nullable:true,
        name:"cod_ref"
        })
    cod_ref:number | null;
        

   
    @OneToMany(type=>cuenta, cuenta=>cuenta.entidadFinanciera)
    cuentas:Promise<cuenta[]>;
    

   
    @OneToMany(type=>red, red=>red.bancoClearing)
    reds:Promise<red[]>;
    

   
    @OneToMany(type=>registro_cheque, registro_cheque=>registro_cheque.idEntidadFinanciera)
    registroCheques:Promise<registro_cheque[]>;
    

   
    @OneToMany(type=>transaccion, transaccion=>transaccion.entidadFinanciera)
    transaccions:Promise<transaccion[]>;
    
}
