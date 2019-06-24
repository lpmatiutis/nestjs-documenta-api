import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {boleta_pago_contrib} from "./boleta_pago_contrib";
import {form_contrib} from "./form_contrib";


@Entity("contribuyentes",{schema:"redcobrosjp" } )
@Index("contribuyentes_ruc_nuevo_digito_verificador_key",["digito_verificador","ruc_nuevo",],{unique:true})
@Index("cont_uk2",["digito_verificador","ruc_nuevo",],{unique:true})
@Index("contribuyentes_ruc_nuevo_key",["ruc_nuevo",],{unique:true})
export class contribuyentes extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_contribuyente"
        })
    id_contribuyente:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"digito_verificador"
        })
    digito_verificador:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"mes_cierre"
        })
    mes_cierre:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"modalidad_contribuyente"
        })
    modalidad_contribuyente:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"nombre_contribuyente"
        })
    nombre_contribuyente:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"ruc_anterior"
        })
    ruc_anterior:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"ruc_nuevo"
        })
    ruc_nuevo:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"tipo_contribuyente"
        })
    tipo_contribuyente:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_alta"
        })
    fecha_alta:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"usuario_terminal"
        })
    usuario_terminal:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"mensaje"
        })
    mensaje:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"estado"
        })
    estado:string | null;
        

   
    @OneToMany(type=>boleta_pago_contrib, boleta_pago_contrib=>boleta_pago_contrib.contribuyente)
    boletaPagoContribs:Promise<boleta_pago_contrib[]>;
    

   
    @OneToMany(type=>form_contrib, form_contrib=>form_contrib.contribuyente)
    formContribs:Promise<form_contrib[]>;
    
}
