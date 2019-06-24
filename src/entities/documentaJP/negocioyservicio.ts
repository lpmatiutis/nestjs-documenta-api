import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("negocioyservicio",{schema:"redcobrosjp" } )
@Index("uq_negyserv_cedula",["cedula",],{unique:true})
export class negocioyservicio extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:50,
        name:"cedula"
        })
    cedula:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:200,
        name:"nombre"
        })
    nombre:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_alta"
        })
    fecha_alta:Date;
        
}
