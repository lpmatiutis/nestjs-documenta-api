import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("reteniones_cargill",{schema:"redcobrosjp" } )
export class reteniones_cargill extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_retencion"
        })
    id_retencion:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_cliente"
        })
    id_cliente:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"ruc"
        })
    ruc:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"monto"
        })
    monto:number | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"moneda"
        })
    moneda:number | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_ingreso"
        })
    fecha_ingreso:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"nro_retencion"
        })
    nro_retencion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"razon_social"
        })
    razon_social:string | null;
        
}
