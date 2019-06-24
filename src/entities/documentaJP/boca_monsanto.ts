import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("boca_monsanto",{schema:"redcobrosjp" } )
export class boca_monsanto extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:100,
        name:"nombre"
        })
    nombre:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"direccion"
        })
    direccion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"ciudad"
        })
    ciudad:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"departamento"
        })
    departamento:string;
        

    @Column("bigint",{ 
        nullable:false,
        default: () => "0",
        name:"monto_desde"
        })
    monto_desde:string;
        

    @Column("bigint",{ 
        nullable:false,
        default: () => "0",
        name:"monto_hasta"
        })
    monto_hasta:string;
        
}
