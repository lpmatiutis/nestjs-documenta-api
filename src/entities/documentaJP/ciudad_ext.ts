import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {ciudad} from "./ciudad";


@Entity("ciudad_ext",{schema:"redcobrosjp" } )
export class ciudad_ext extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"entidad"
        })
    entidad:string;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_ciudad_ext"
        })
    id_ciudad_ext:string;
        

   
    @ManyToOne(type=>ciudad, ciudad=>ciudad.ciudadExts,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_ciudad_int'})
    idCiudadInt:Promise<ciudad | null>;

    @RelationId((ciudad_ext: ciudad_ext) => ciudad_ext.idCiudadInt)
    idCiudadIntId: Promise<string[]>;

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        
}
