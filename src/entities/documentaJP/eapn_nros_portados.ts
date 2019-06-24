import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("eapn_nros_portados",{schema:"redcobrosjp" } )
export class eapn_nros_portados extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"identificador"
        })
    identificador:string;
        

    @Column("smallint",{ 
        nullable:false,
        name:"tipo_accion"
        })
    tipo_accion:number;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:15,
        name:"numero"
        })
    numero:string;
        

    @Column("character",{ 
        nullable:true,
        length:3,
        name:"routing_number"
        })
    routing_number:string | null;
        

    @Column("character",{ 
        nullable:true,
        length:3,
        name:"id_receptor"
        })
    id_receptor:string | null;
        

    @Column("character",{ 
        nullable:true,
        length:3,
        name:"id_donante"
        })
    id_donante:string | null;
        

    @Column("character",{ 
        nullable:true,
        length:3,
        name:"id_asignatario_original"
        })
    id_asignatario_original:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_ventana_cambio"
        })
    fecha_ventana_cambio:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_proceso"
        })
    fecha_proceso:Date;
        

    @Column("character",{ 
        nullable:true,
        length:3,
        name:"routing_number_anterior"
        })
    routing_number_anterior:string | null;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"activo"
        })
    activo:string;
        
}
