import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {pareo_sucursal_senacsa} from "./pareo_sucursal_senacsa";


@Entity("cod_sucursal_senacsa",{schema:"redcobrosjp" } )
export class cod_sucursal_senacsa extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"cod_senacsa"
        })
    cod_senacsa:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:40,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @OneToMany(type=>pareo_sucursal_senacsa, pareo_sucursal_senacsa=>pareo_sucursal_senacsa.codSenacsa)
    pareoSucursalSenacsas:Promise<pareo_sucursal_senacsa[]>;
    
}
