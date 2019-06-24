import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("servicio_rc_alkosto",{schema:"redcobrosjp" } )
export class servicio_rc_alkosto extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_servicio_documenta"
        })
    id_servicio_documenta:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:60,
        name:"descripcion_documenta"
        })
    descripcion_documenta:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_servicio_alkosto"
        })
    id_servicio_alkosto:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:60,
        name:"descripcion_alkosto"
        })
    descripcion_alkosto:string | null;
        
}
