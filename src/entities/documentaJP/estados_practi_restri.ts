import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {practi_restri} from "./practi_restri";


@Entity("estados_practi_restri",{schema:"redcobrosjp" } )
export class estados_practi_restri extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"cod_estado"
        })
    cod_estado:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"des_estado"
        })
    des_estado:string | null;
        

   
    @OneToMany(type=>practi_restri, practi_restri=>practi_restri.codEstado)
    practiRestris:Promise<practi_restri[]>;
    
}
