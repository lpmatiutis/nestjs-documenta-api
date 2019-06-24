import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("contiwallet",{schema:"redcobrosjp" } )
export class contiwallet extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_transaccion_envio"
        })
    id_transaccion_envio:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"cedula_origen"
        })
    cedula_origen:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_recaudador_origen"
        })
    id_recaudador_origen:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_pdv_origen"
        })
    id_pdv_origen:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"cedula_destino"
        })
    cedula_destino:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"nro_movil_destino"
        })
    nro_movil_destino:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_estado"
        })
    id_estado:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"pin"
        })
    pin:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_recaudador_destino"
        })
    id_recaudador_destino:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_pdv_destino"
        })
    id_pdv_destino:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_transaccion_retiro"
        })
    id_transaccion_retiro:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"monto"
        })
    monto:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"comision"
        })
    comision:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_transaccion_remota_envio"
        })
    id_transaccion_remota_envio:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_transaccion_remota_retiro"
        })
    id_transaccion_remota_retiro:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"fecha_hora_remota_envio"
        })
    fecha_hora_remota_envio:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"fecha_hora_remota_retiro"
        })
    fecha_hora_remota_retiro:string | null;
        
}
