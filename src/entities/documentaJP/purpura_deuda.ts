import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("purpura_deuda",{schema:"redcobrosjp" } )
export class purpura_deuda extends BaseEntity {

    @Column("character varying",{ 
        nullable:true,
        primary: true,
        length:15,
        name:"cedula"
        })
    cedula:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"persona"
        })
    persona:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:40,
        name:"nro_producto"
        })
    nro_producto:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"producto"
        })
    producto:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"monto_cuota"
        })
    monto_cuota:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_cuota"
        })
    numero_cuota:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"total_cuota"
        })
    total_cuota:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:8,
        name:"fecha_venc"
        })
    fecha_venc:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        default: () => "0",
        name:"estado_pago"
        })
    estado_pago:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:8,
        name:"fecha_pago"
        })
    fecha_pago:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_trans"
        })
    id_trans:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id"
        })
    id:string | null;
        
}
