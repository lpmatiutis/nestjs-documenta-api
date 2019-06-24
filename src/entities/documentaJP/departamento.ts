import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {pais} from "./pais";
import {ciudad} from "./ciudad";
import {departamento_ext} from "./departamento_ext";


@Entity("departamento",{schema:"redcobrosjp" } )
export class departamento extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_departamento"
        })
    id_departamento:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombre"
        })
    nombre:string;
        

   
    @ManyToOne(type=>pais, pais=>pais.departamentos,{  nullable:false, })
    @JoinColumn({ name:'pais'})
    pais:Promise<pais | null>;

    @RelationId((departamento: departamento) => departamento.pais)
    paisId: Promise<string[]>;

   
    @OneToMany(type=>ciudad, ciudad=>ciudad.departamento)
    ciudads:Promise<ciudad[]>;
    

   
    @OneToMany(type=>departamento_ext, departamento_ext=>departamento_ext.idDepartamentoInt)
    departamentoExts:Promise<departamento_ext[]>;
    
}
