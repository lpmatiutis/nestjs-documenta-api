import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("mitsubi",{schema:"redcobrosjp" } )
@Index("mitsubi_nro_doc_idx",["nro_documento",])
export class mitsubi extends BaseEntity {

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha"
        })
    fecha:Date;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"nro_documento"
        })
    nro_documento:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"razon_social"
        })
    razon_social:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"total"
        })
    total:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:20,
        name:"nro_factura"
        })
    nro_factura:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_vencimiento"
        })
    fecha_vencimiento:Date;
        

    @Column("character varying",{ 
        nullable:false,
        length:1,
        default: () => "'N'",
        name:"pagado"
        })
    pagado:string;
        
}
