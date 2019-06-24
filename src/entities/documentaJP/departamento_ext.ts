import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {departamento} from "./departamento";


@Entity("departamento_ext",{schema:"redcobrosjp" } )
export class departamento_ext extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"entidad"
        })
    entidad:string;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_departamento_ext"
        })
    id_departamento_ext:string;
        

   
    @ManyToOne(type=>departamento, departamento=>departamento.departamentoExts,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_departamento_int'})
    idDepartamentoInt:Promise<departamento | null>;

    @RelationId((departamento_ext: departamento_ext) => departamento_ext.idDepartamentoInt)
    idDepartamentoIntId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        
}
