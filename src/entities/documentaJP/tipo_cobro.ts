import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {clearing_facturador} from "./clearing_facturador";


@Entity("tipo_cobro",{schema:"redcobrosjp" } )
export class tipo_cobro extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_tipo_cobro"
        })
    id_tipo_cobro:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"dias_acreditacion"
        })
    dias_acreditacion:string;
        

   
    @OneToMany(type=>clearing_facturador, clearing_facturador=>clearing_facturador.tipoCobro)
    clearingFacturadors:Promise<clearing_facturador[]>;
    
}
