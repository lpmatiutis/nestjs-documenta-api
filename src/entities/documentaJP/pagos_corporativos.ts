import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("pagos_corporativos",{schema:"redcobrosjp" } )
export class pagos_corporativos extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_pago_corporativo"
        })
    id_pago_corporativo:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"bill_to_nro"
        })
    bill_to_nro:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"cliente"
        })
    cliente:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"cod_banco"
        })
    cod_banco:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"corrida"
        })
    corrida:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"empresa"
        })
    empresa:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"estado"
        })
    estado:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"monto"
        })
    monto:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"nro"
        })
    nro:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"nro_factura"
        })
    nro_factura:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"nro_recibo"
        })
    nro_recibo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"tipo_facura"
        })
    tipo_facura:string | null;
        
}
