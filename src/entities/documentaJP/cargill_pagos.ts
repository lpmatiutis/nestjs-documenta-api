import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cargill_pagos",{schema:"redcobrosjp" } )
export class cargill_pagos extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_transaccion"
        })
    id_transaccion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"id_fiscal"
        })
    id_fiscal:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"monto"
        })
    monto:number;
        

    @Column("smallint",{ 
        nullable:false,
        name:"moneda"
        })
    moneda:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:40,
        name:"unidad_owner"
        })
    unidad_owner:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_ingreso"
        })
    fecha_ingreso:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"notificado"
        })
    notificado:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"razon_social"
        })
    razon_social:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"cambio"
        })
    cambio:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"monto_cambio"
        })
    monto_cambio:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"cod_cliente"
        })
    cod_cliente:string | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"tipo_pago"
        })
    tipo_pago:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"banco"
        })
    banco:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"desc_tp"
        })
    desc_tp:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"chq_fec_emi"
        })
    chq_fec_emi:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"chq_fec_pago"
        })
    chq_fec_pago:Date | null;
        

    @Column("character",{ 
        nullable:true,
        default: () => "'N'",
        name:"es_chq_dif"
        })
    es_chq_dif:string | null;
        

    @Column("character",{ 
        nullable:true,
        default: () => "'N'",
        name:"migrado"
        })
    migrado:string | null;
        
}
