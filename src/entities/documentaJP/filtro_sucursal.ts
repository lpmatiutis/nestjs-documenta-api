import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("filtro_sucursal",{schema:"redcobrosjp" } )
export class filtro_sucursal extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_filtro_sucursal"
        })
    id_filtro_sucursal:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"sucursal"
        })
    sucursal:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"servicio"
        })
    servicio:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"habilitado"
        })
    habilitado:string | null;
        
}
