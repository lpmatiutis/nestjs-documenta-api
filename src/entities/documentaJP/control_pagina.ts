import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {patron_pagina} from "./patron_pagina";


@Entity("control_pagina",{schema:"redcobrosjp" } )
export class control_pagina extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:30,
        name:"id_control"
        })
    id_control:string;
        

   
    @ManyToOne(type=>patron_pagina, patron_pagina=>patron_pagina.controlPaginas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_patron'})
    idPatron:Promise<patron_pagina | null>;

    @RelationId((control_pagina: control_pagina) => control_pagina.idPatron)
    idPatronId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"valor"
        })
    valor:string;
        
}
