import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("uni_detalle_transaccion",{schema:"redcobrosjp" } )
export class uni_detalle_transaccion extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary: true,
        name:"id_transaccion"
        })
    id_transaccion:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"id_pago"
        })
    id_pago:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"id_arancel"
        })
    id_arancel:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"cedula"
        })
    cedula:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"nombre"
        })
    nombre:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"arancel"
        })
    arancel:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"facultad"
        })
    facultad:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"carrera"
        })
    carrera:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"monto"
        })
    monto:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"multa"
        })
    multa:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"total"
        })
    total:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"origen_ingreso"
        })
    origen_ingreso:string | null;
        
}
