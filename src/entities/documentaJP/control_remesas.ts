import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("control_remesas",{schema:"redcobrosjp" } )
export class control_remesas extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:10,
        name:"nro_telefono"
        })
    nro_telefono:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"monto_enviado"
        })
    monto_enviado:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"tope"
        })
    tope:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        primary:true,
        name:"fecha"
        })
    fecha:Date;
        
}
