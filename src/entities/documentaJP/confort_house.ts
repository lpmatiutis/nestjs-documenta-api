import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("confort_house",{schema:"redcobrosjp" } )
export class confort_house extends BaseEntity {

    @Column("bigint",{ 
        nullable:true,
        name:"cliente"
        })
    cliente:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        primary: true,
        length:20,
        name:"cedula"
        })
    cedula:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"nombre"
        })
    nombre:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"nro_cuota"
        })
    nro_cuota:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"importe"
        })
    importe:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"vencimiento"
        })
    vencimiento:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"trn_nro"
        })
    trn_nro:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"nro_factura"
        })
    nro_factura:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        default: () => "'N'",
        name:"pagado"
        })
    pagado:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"monto_mora"
        })
    monto_mora:string | null;
        
}
