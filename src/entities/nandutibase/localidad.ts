import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {departamento} from "./departamento";
import {barrio} from "./barrio";


@Entity("localidad",{schema:"base" } )
@Index("localidad_idx_uq_localidad_descripcion",["descripcion","iddepartamento",],{unique:true})
export class localidad extends BaseEntity {

   
    @ManyToOne(type=>departamento, departamento=>departamento.localidads,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'iddepartamento'})
    iddepartamento:Promise<departamento | null>;

    @RelationId((localidad: localidad) => localidad.iddepartamento)
    iddepartamentoId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idlocalidad"
        })
    idlocalidad:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"codigocorreo"
        })
    codigocorreo:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"departamento"
        })
    departamento:string | null;
        

   
    @OneToMany(type=>barrio, barrio=>barrio.iddepartamento,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    barrios:Promise<barrio[]>;
    

   
    @OneToMany(type=>barrio, barrio=>barrio.idlocalidad,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    barrios2:Promise<barrio[]>;
    
}
