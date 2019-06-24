import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("raices",{schema:"redcobrosjp" } )
export class raices extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        length:12,
        name:"documento"
        })
    documento:string;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"factura"
        })
    factura:number;
        

    @Column("smallint",{ 
        nullable:false,
        primary:true,
        name:"numero_cuota"
        })
    numero_cuota:number;
        

    @Column("smallint",{ 
        nullable:true,
        name:"nose"
        })
    nose:number | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"importe_cuota"
        })
    importe_cuota:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"importe_mora"
        })
    importe_mora:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"importe_impuesto"
        })
    importe_impuesto:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"fecha_vencimiento"
        })
    fecha_vencimiento:string;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"pagado"
        })
    pagado:string;
        
}
