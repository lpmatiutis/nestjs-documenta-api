import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tipopermiso",{schema:"base" } )
export class tipopermiso extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtipopermiso"
        })
    idtipopermiso:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"codigo"
        })
    codigo:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:70,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"grupo"
        })
    grupo:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"obs"
        })
    obs:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        
}
