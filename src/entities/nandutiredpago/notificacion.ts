import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("notificacion",{schema:"reddepago" } )
export class notificacion extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idnotificacion"
        })
    idnotificacion:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:5,
        name:"modulo"
        })
    modulo:string;
        

    @Column("smallint",{ 
        nullable:false,
        name:"segundovisualizacion"
        })
    segundovisualizacion:number;
        

    @Column("date",{ 
        nullable:true,
        name:"validohasta"
        })
    validohasta:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:150,
        name:"imagen"
        })
    imagen:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:70,
        name:"titulo"
        })
    titulo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:90,
        name:"subtitulo"
        })
    subtitulo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:110,
        name:"mensaje"
        })
    mensaje:string;
        
}
