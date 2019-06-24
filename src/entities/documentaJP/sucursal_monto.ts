import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("sucursal_monto",{schema:"redcobrosjp" } )
export class sucursal_monto extends BaseEntity {

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
        

    @Column("bigint",{ 
        nullable:true,
        name:"monto_tope"
        })
    monto_tope:string | null;
        
}
