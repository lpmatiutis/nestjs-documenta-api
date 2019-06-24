import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("param_tasas",{schema:"redcobrosjp" } )
export class param_tasas extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_param_tasa"
        })
    id_param_tasa:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"concepto_campo"
        })
    concepto_campo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion"
        })
    descripcion:string | null;
        

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
        name:"formulario"
        })
    formulario:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"tasa_efectiva"
        })
    tasa_efectiva:number | null;
        
}
