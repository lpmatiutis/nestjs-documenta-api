import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("recibos_vox_historico",{schema:"redcobrosjp" } )
export class recibos_vox_historico extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_historico"
        })
    id_historico:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"estado"
        })
    estado:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha"
        })
    fecha:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"monto"
        })
    monto:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"nro_recibo"
        })
    nro_recibo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"nro_telefono"
        })
    nro_telefono:string | null;
        
}
