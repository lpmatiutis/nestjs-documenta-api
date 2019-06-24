import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("base_de_datos_clientes",{schema:"redcobrosjp" } )
export class base_de_datos_clientes extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"url_cliente"
        })
    url_cliente:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"driver_class"
        })
    driver_class:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"habilitado"
        })
    habilitado:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_recaudador"
        })
    id_recaudador:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_red"
        })
    id_red:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_sucursal"
        })
    id_sucursal:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombre_usuario"
        })
    nombre_usuario:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"password_usuario"
        })
    password_usuario:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"prefijo"
        })
    prefijo:string;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_bd_cliente"
        })
    id_bd_cliente:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"secuencia_min"
        })
    secuencia_min:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"secuencia_max"
        })
    secuencia_max:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"hora_replicacion"
        })
    hora_replicacion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"incremento"
        })
    incremento:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"tipo_incremento"
        })
    tipo_incremento:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"proxima_replicacion"
        })
    proxima_replicacion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"dias_replicacion"
        })
    dias_replicacion:string | null;
        

    @Column("character",{ 
        nullable:true,
        default: () => "1",
        name:"impuesto"
        })
    impuesto:string | null;
        

    @Column("character",{ 
        nullable:true,
        default: () => "1",
        name:"servicio"
        })
    servicio:string | null;
        
}
