import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {cliente} from "./cliente";


@Entity("noticia",{schema:"reddepago" } )
export class noticia extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"idnoticia"
        })
    idnoticia:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"idusuario"
        })
    idusuario:string | null;
        

   
    @ManyToOne(type=>cliente, cliente=>cliente.noticias,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<cliente | null>;

    @RelationId((noticia: noticia) => noticia.idpersona)
    idpersonaId: Promise<string[]>;

   
    @ManyToOne(type=>cliente, cliente=>cliente.noticias2,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<cliente | null>;

    @RelationId((noticia: noticia) => noticia.idcliente)
    idclienteId: Promise<string[]>;

    @Column("integer",{ 
        nullable:false,
        name:"idtiponoticia"
        })
    idtiponoticia:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"titulo"
        })
    titulo:string;
        

    @Column("text",{ 
        nullable:false,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"tipoicono"
        })
    tipoicono:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"destacado"
        })
    destacado:boolean;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecini"
        })
    fecini:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecfin"
        })
    fecfin:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"feclectura"
        })
    feclectura:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"recurso"
        })
    recurso:string | null;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "0",
        name:"intervalo"
        })
    intervalo:number;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"aud_fecalta"
        })
    aud_fecalta:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"aud_idusuarioalta"
        })
    aud_idusuarioalta:number;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"aud_fecmodif"
        })
    aud_fecmodif:Date | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"aud_idusuariomodif"
        })
    aud_idusuariomodif:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:150,
        name:"enlace"
        })
    enlace:string | null;
        
}
