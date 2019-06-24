import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {grupo_pagina} from "./grupo_pagina";
import {control_pagina} from "./control_pagina";
import {log_transaccion_rc} from "./log_transaccion_rc";


@Entity("patron_pagina",{schema:"redcobrosjp" } )
export class patron_pagina extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id_patron"
        })
    id_patron:number;
        

   
    @ManyToOne(type=>grupo_pagina, grupo_pagina=>grupo_pagina.patronPaginas,{  nullable:false, })
    @JoinColumn({ name:'id_grupo_pagina'})
    idGrupoPagina:Promise<grupo_pagina | null>;

    @RelationId((patron_pagina: patron_pagina) => patron_pagina.idGrupoPagina)
    idGrupoPaginaId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"url"
        })
    url:string;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "0",
        name:"error"
        })
    error:number;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"inicial"
        })
    inicial:string;
        

   
    @ManyToOne(type=>patron_pagina, patron_pagina=>patron_pagina.patronPaginas,{  })
    @JoinColumn({ name:'id_patron_siguiente'})
    idPatronSiguiente:Promise<patron_pagina | null>;

    @RelationId((patron_pagina: patron_pagina) => patron_pagina.idPatronSiguiente)
    idPatronSiguienteId: Promise<number[]>;

   
    @OneToMany(type=>control_pagina, control_pagina=>control_pagina.idPatron)
    controlPaginas:Promise<control_pagina[]>;
    

   
    @OneToMany(type=>log_transaccion_rc, log_transaccion_rc=>log_transaccion_rc.idPatron)
    logTransaccionRcs:Promise<log_transaccion_rc[]>;
    

   
    @OneToMany(type=>patron_pagina, patron_pagina=>patron_pagina.idPatronSiguiente)
    patronPaginas:Promise<patron_pagina[]>;
    
}
