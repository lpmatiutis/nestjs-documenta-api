import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("monto_servicio",{schema:"redcobrosjp" } )
export class monto_servicio extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"sucursal"
        })
    sucursal:string;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"servicio"
        })
    servicio:number;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        primary:true,
        name:"fecha"
        })
    fecha:Date;
        

    @Column("bigint",{ 
        nullable:true,
        name:"monto_enviado"
        })
    monto_enviado:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"monto_tope"
        })
    monto_tope:string | null;
        
}
