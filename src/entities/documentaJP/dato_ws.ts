import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("dato_ws",{schema:"redcobrosjp" } )
export class dato_ws extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:30,
        name:"id_dato_ws"
        })
    id_dato_ws:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"referencia"
        })
    referencia:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"servicio"
        })
    servicio:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"monto"
        })
    monto:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha"
        })
    fecha:Date | null;
        
}
