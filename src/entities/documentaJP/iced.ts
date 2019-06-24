import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("iced",{schema:"redcobrosjp" } )
export class iced extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_iced"
        })
    id_iced:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"fecha_inicio"
        })
    fecha_inicio:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"fecha_fin"
        })
    fecha_fin:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"monto"
        })
    monto:string;
        
}
