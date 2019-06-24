import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("filtro_recaudador",{schema:"redcobrosjp" } )
export class filtro_recaudador extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_filtro_recaudador"
        })
    id_filtro_recaudador:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"recaudador"
        })
    recaudador:string | null;
        

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
