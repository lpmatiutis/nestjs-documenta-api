import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("parametros",{schema:"redcobrosjp" } )
export class parametros extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_parametro"
        })
    id_parametro:string;
        

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
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"fundamento_legal"
        })
    fundamento_legal:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"infraccion"
        })
    infraccion:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"plazo_desde"
        })
    plazo_desde:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"plazo_hasta"
        })
    plazo_hasta:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"tipo"
        })
    tipo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"tipo_calculo"
        })
    tipo_calculo:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"valor"
        })
    valor:number | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:2,
        name:"valor_maximo"
        })
    valor_maximo:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:2,
        name:"valor_minimo"
        })
    valor_minimo:string | null;
        
}
