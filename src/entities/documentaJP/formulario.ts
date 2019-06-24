import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {campo} from "./campo";
import {dominios} from "./dominios";
import {form_contrib} from "./form_contrib";


@Entity("formulario",{schema:"redcobrosjp" } )
export class formulario extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_formulario"
        })
    id_formulario:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"campo_pagar"
        })
    campo_pagar:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_desde"
        })
    fecha_desde:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_hasta"
        })
    fecha_hasta:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"num_dec_clausura"
        })
    num_dec_clausura:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"num_dec_orig"
        })
    num_dec_orig:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"num_dec_rectif"
        })
    num_dec_rectif:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"num_num_dec_rectif"
        })
    num_num_dec_rectif:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"num_periodo_fiscal"
        })
    num_periodo_fiscal:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_formulario"
        })
    numero_formulario:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"valor_dec_clausura"
        })
    valor_dec_clausura:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"valor_dec_orig"
        })
    valor_dec_orig:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"valor_dec_rectif"
        })
    valor_dec_rectif:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"version"
        })
    version:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"version_default"
        })
    version_default:string | null;
        

   
    @OneToMany(type=>campo, campo=>campo.formulario)
    campos:Promise<campo[]>;
    

   
    @OneToMany(type=>dominios, dominios=>dominios.formulario)
    dominioss:Promise<dominios[]>;
    

   
    @OneToMany(type=>form_contrib, form_contrib=>form_contrib.formulario)
    formContribs:Promise<form_contrib[]>;
    
}
