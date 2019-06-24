import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("control_referencia",{schema:"redcobrosjp" } )
export class control_referencia extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:30,
        name:"referencia"
        })
    referencia:string;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "0",
        name:"tot_dia"
        })
    tot_dia:number;
        

    @Column("integer",{ 
        nullable:false,
        default: () => "0",
        name:"tot_mes"
        })
    tot_mes:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id_servicio"
        })
    id_servicio:number;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha"
        })
    fecha:Date;
        
}
