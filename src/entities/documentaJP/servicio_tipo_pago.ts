import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("servicio_tipo_pago",{schema:"redcobrosjp" } )
export class servicio_tipo_pago extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"servicio"
        })
    servicio:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"tipo_pago"
        })
    tipo_pago:number;
        

    @Column("bigint",{ 
        nullable:true,
        name:"entidad"
        })
    entidad:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion"
        })
    descripcion:string | null;
        
}
