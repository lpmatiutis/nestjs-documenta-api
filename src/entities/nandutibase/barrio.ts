import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {localidad} from "./localidad";


@Entity("barrio",{schema:"base" } )
@Index("barrio_idx_uq_barrio_descripcion",["descripcion","iddepartamento","idlocalidad",],{unique:true})
export class barrio extends BaseEntity {

   
    @ManyToOne(type=>localidad, localidad=>localidad.barrios,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'iddepartamento'})
    iddepartamento:Promise<localidad | null>;

    @RelationId((barrio: barrio) => barrio.iddepartamento)
    iddepartamentoId: Promise<number[]>;

   
    @ManyToOne(type=>localidad, localidad=>localidad.barrios2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idlocalidad'})
    idlocalidad:Promise<localidad | null>;

    @RelationId((barrio: barrio) => barrio.idlocalidad)
    idlocalidadId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idbarrio"
        })
    idbarrio:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"descripcion"
        })
    descripcion:string;
        
}
