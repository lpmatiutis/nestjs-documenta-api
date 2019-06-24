import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("prosegur_deuda",{schema:"redcobrosjp" } )
export class prosegur_deuda extends BaseEntity {

    @Column("character varying",{ 
        nullable:true,
        length:250,
        name:"cliente"
        })
    cliente:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"tipo_persona"
        })
    tipo_persona:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"tipo_doc"
        })
    tipo_doc:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        primary: true,
        length:15,
        name:"nro_doc"
        })
    nro_doc:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"id_cuenta"
        })
    id_cuenta:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"id_deuda"
        })
    id_deuda:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"moneda"
        })
    moneda:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:18,
        scale:2,
        name:"importe"
        })
    importe:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"f_vto"
        })
    f_vto:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:18,
        scale:2,
        name:"cargo_adicional"
        })
    cargo_adicional:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"id_de_servicio"
        })
    id_de_servicio:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"nro_cuota"
        })
    nro_cuota:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"cant_cuotas"
        })
    cant_cuotas:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"estado_pago"
        })
    estado_pago:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"fecha_pago"
        })
    fecha_pago:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:18,
        scale:2,
        name:"pago"
        })
    pago:string | null;
        
}
