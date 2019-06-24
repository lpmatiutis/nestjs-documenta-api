import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("senacsa_trx",{schema:"redcobrosjp" } )
export class senacsa_trx extends BaseEntity {

    @Column("date",{ 
        nullable:false,
        name:"fecha_operacion"
        })
    fecha_operacion:string;
        

    @Column("numeric",{ 
        nullable:false,
        name:"monto"
        })
    monto:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:50,
        name:"referencia"
        })
    referencia:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary: true,
        length:30,
        name:"id_trx"
        })
    id_trx:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"cod_respuesta"
        })
    cod_respuesta:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"confirmado"
        })
    confirmado:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"anulado"
        })
    anulado:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"track_id_pago"
        })
    track_id_pago:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"id_trx_anu"
        })
    id_trx_anu:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:7,
        name:"codigo_entidad"
        })
    codigo_entidad:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"track_id_confirmado"
        })
    track_id_confirmado:string | null;
        
}
