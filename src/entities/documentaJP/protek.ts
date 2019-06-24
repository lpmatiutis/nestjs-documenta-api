import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("protek",{schema:"redcobrosjp" } )
export class protek extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        length:150,
        name:"nombre_cliente"
        })
    nombre_cliente:string;
        

    @Column("character",{ 
        nullable:false,
        length:2,
        name:"tipo_cliente"
        })
    tipo_cliente:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:3,
        name:"tipo_doc"
        })
    tipo_doc:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:12,
        name:"ruc"
        })
    ruc:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:15,
        name:"nro_cliente"
        })
    nro_cliente:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:15,
        name:"factura"
        })
    factura:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:3,
        name:"moneda"
        })
    moneda:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"importe"
        })
    importe:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"vencimiento"
        })
    vencimiento:string;
        

    @Column("smallint",{ 
        nullable:false,
        primary:true,
        name:"nro_cuota"
        })
    nro_cuota:number;
        

    @Column("smallint",{ 
        nullable:true,
        name:"nro_definido"
        })
    nro_definido:number | null;
        

    @Column("character",{ 
        nullable:true,
        name:"pagado"
        })
    pagado:string | null;
        
}
