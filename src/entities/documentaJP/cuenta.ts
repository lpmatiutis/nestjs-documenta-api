import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {entidad_financiera} from "./entidad_financiera";


@Entity("cuenta",{schema:"redcobrosjp" } )
export class cuenta extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_cuenta"
        })
    id_cuenta:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"alias_cuenta"
        })
    alias_cuenta:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"nro_cuenta"
        })
    nro_cuenta:string | null;
        

   
    @ManyToOne(type=>entidad_financiera, entidad_financiera=>entidad_financiera.cuentas,{  nullable:false, })
    @JoinColumn({ name:'entidad_financiera'})
    entidadFinanciera:Promise<entidad_financiera | null>;

    @RelationId((cuenta: cuenta) => cuenta.entidadFinanciera)
    entidadFinancieraId: Promise<string[]>;
}
