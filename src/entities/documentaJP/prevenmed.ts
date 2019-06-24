import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("prevenmed",{schema:"redcobrosjp" } )
export class prevenmed extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:15,
        name:"cedula"
        })
    cedula:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:15,
        name:"contrato"
        })
    contrato:string | null;
        

    @Column("smallint",{ 
        nullable:true,
        default: () => "1",
        name:"moneda"
        })
    moneda:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"cuota"
        })
    cuota:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:80,
        name:"vencimiento"
        })
    vencimiento:string | null;
        

    @Column("smallint",{ 
        nullable:true,
        default: () => "0",
        name:"estado_pago"
        })
    estado_pago:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"fecha_pago"
        })
    fecha_pago:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"transaccion"
        })
    transaccion:string | null;
        
}
