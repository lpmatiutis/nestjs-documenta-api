import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {patron_pagina} from "./patron_pagina";
import {servicio_rc} from "./servicio_rc";
import {tipo_patron} from "./tipo_patron";


@Entity("grupo_pagina",{schema:"redcobrosjp" } )
export class grupo_pagina extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id_grupo_pagina"
        })
    id_grupo_pagina:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:50,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @OneToMany(type=>patron_pagina, patron_pagina=>patron_pagina.idGrupoPagina)
    patronPaginas:Promise<patron_pagina[]>;
    

   
    @ManyToMany(type=>servicio_rc, servicio_rc=>servicio_rc.grupoPaginas)
    servicioRcs:Promise<servicio_rc[]>;
    

   
    @ManyToMany(type=>tipo_patron, tipo_patron=>tipo_patron.grupoPaginas,{  nullable:false, })
    @JoinTable({ name:'tipo_patron_grupo_pagina'})
    tipoPatrons:Promise<tipo_patron[]>;
    
    @RelationId((grupo_pagina: grupo_pagina) => grupo_pagina.tipoPatrons)
    tipoPatronsId: Promise<undefined[]>;
}
