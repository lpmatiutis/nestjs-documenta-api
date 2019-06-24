import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";


@Entity("complemento",{schema:"redcobrosjp" } )
export class complemento extends BaseEntity {

    @Column("smallint",{ 
        nullable:false,
        primary:true,
        name:"id_complemento"
        })
    id_complemento:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"complemento"
        })
    complemento:string;
        

   
    @OneToMany(type=>servicio_rc, servicio_rc=>servicio_rc.idComplemento)
    servicioRcs:Promise<servicio_rc[]>;
    
}
