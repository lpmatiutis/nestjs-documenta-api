import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {contribuyentes} from "./contribuyentes";
import {formulario} from "./formulario";
import {grupo} from "./grupo";
import {transaccion} from "./transaccion";
import {usuario_terminal} from "./usuario_terminal";
import {boleta_pago_contrib} from "./boleta_pago_contrib";
import {campos_form_contrib} from "./campos_form_contrib";
import {datos_formularios} from "./datos_formularios";


@Entity("form_contrib",{schema:"redcobrosjp" } )
@Index("fecha_certificado_set_ix",["fecha_certificado_set",])
export class form_contrib extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_form_contrib"
        })
    id_form_contrib:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"campos_validos"
        })
    campos_validos:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:1,
        name:"certificado"
        })
    certificado:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"codigo_hash"
        })
    codigo_hash:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"consecutivo"
        })
    consecutivo:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"digito_verificador"
        })
    digito_verificador:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"enviado"
        })
    enviado:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_certificado_set"
        })
    fecha_certificado_set:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_controlado"
        })
    fecha_controlado:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_hora_real_certificado"
        })
    fecha_hora_real_certificado:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora_recepcion"
        })
    fecha_hora_recepcion:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_presentacion"
        })
    fecha_presentacion:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_recibido"
        })
    fecha_recibido:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_orden"
        })
    numero_orden:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"pagado"
        })
    pagado:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"periodo_fiscal"
        })
    periodo_fiscal:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"pos_grupo"
        })
    pos_grupo:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"ruc"
        })
    ruc:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"total_pagar"
        })
    total_pagar:string;
        

   
    @ManyToOne(type=>contribuyentes, contribuyentes=>contribuyentes.formContribs,{  nullable:false, })
    @JoinColumn({ name:'contribuyente'})
    contribuyente:Promise<contribuyentes | null>;

    @RelationId((form_contrib: form_contrib) => form_contrib.contribuyente)
    contribuyenteId: Promise<string[]>;

   
    @ManyToOne(type=>formulario, formulario=>formulario.formContribs,{  nullable:false, })
    @JoinColumn({ name:'formulario'})
    formulario:Promise<formulario | null>;

    @RelationId((form_contrib: form_contrib) => form_contrib.formulario)
    formularioId: Promise<string[]>;

   
    @ManyToOne(type=>grupo, grupo=>grupo.formContribs,{  })
    @JoinColumn({ name:'grupo'})
    grupo:Promise<grupo | null>;

    @RelationId((form_contrib: form_contrib) => form_contrib.grupo)
    grupoId: Promise<string[]>;

   
    @ManyToOne(type=>transaccion, transaccion=>transaccion.formContribs,{  })
    @JoinColumn({ name:'transaccion'})
    transaccion:Promise<transaccion | null>;

    @RelationId((form_contrib: form_contrib) => form_contrib.transaccion)
    transaccionId: Promise<string[]>;

   
    @ManyToOne(type=>usuario_terminal, usuario_terminal=>usuario_terminal.formContribs,{  })
    @JoinColumn({ name:'usuario_terminal_carga'})
    usuarioTerminalCarga:Promise<usuario_terminal | null>;

    @RelationId((form_contrib: form_contrib) => form_contrib.usuarioTerminalCarga)
    usuarioTerminalCargaId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:true,
        length:25,
        name:"gestor"
        })
    gestor:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_vencimiento"
        })
    fecha_vencimiento:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"dias_atrasados"
        })
    dias_atrasados:string | null;
        

    @Column("character",{ 
        nullable:true,
        default: () => "'N'",
        name:"migrado"
        })
    migrado:string | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"num_lote"
        })
    num_lote:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"transaccion_rc"
        })
    transaccion_rc:string | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"flg_pago_online"
        })
    flg_pago_online:number | null;
        

   
    @OneToMany(type=>boleta_pago_contrib, boleta_pago_contrib=>boleta_pago_contrib.formContrib)
    boletaPagoContribs:Promise<boleta_pago_contrib[]>;
    

   
    @OneToMany(type=>campos_form_contrib, campos_form_contrib=>campos_form_contrib.formContrib)
    camposFormContribs:Promise<campos_form_contrib[]>;
    

   
    @OneToOne(type=>datos_formularios, datos_formularios=>datos_formularios.formContrib)
    datosFormularios:Promise<datos_formularios | null>;

}
