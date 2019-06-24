import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("param_vencimientos",{schema:"redcobrosjp" } )
export class param_vencimientos extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_param_vencimiento"
        })
    id_param_vencimiento:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"abreviatura"
        })
    abreviatura:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"digito_desde_cad"
        })
    digito_desde_cad:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"digito_hasta_cad"
        })
    digito_hasta_cad:string | null;
        

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
        name:"impuesto"
        })
    impuesto:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"meses_plazo"
        })
    meses_plazo:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_cuota"
        })
    numero_cuota:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"periodicidad"
        })
    periodicidad:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"plazo_declaracion"
        })
    plazo_declaracion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"unidad_tiempo"
        })
    unidad_tiempo:string | null;
        
}
