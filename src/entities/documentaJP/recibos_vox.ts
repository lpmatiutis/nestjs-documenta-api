import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("recibos_vox",{schema:"redcobrosjp" } )
export class recibos_vox extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"nro_recibo"
        })
    nro_recibo:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha"
        })
    fecha:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"migrado"
        })
    migrado:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"monto"
        })
    monto:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"nro_telefono"
        })
    nro_telefono:string | null;
        
}
