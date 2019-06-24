import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {boleta_pago_contrib} from "./boleta_pago_contrib";


@Entity("impuesto",{schema:"redcobrosjp" } )
export class impuesto extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_impuesto"
        })
    id_impuesto:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"nombre"
        })
    nombre:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero"
        })
    numero:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"sigla"
        })
    sigla:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"tipo_atributo"
        })
    tipo_atributo:string | null;
        

   
    @OneToMany(type=>boleta_pago_contrib, boleta_pago_contrib=>boleta_pago_contrib.impuesto)
    boletaPagoContribs:Promise<boleta_pago_contrib[]>;
    
}
