import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tasas_asu",{schema:"redcobrosjp" } )
export class tasas_asu extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_tasa"
        })
    id_tasa:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"cod_tasa"
        })
    cod_tasa:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"nombre_tasa"
        })
    nombre_tasa:string | null;
        
}
