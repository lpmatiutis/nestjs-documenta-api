import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("columbia",{schema:"redcobrosjp" } )
export class columbia extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:255,
        name:"ci"
        })
    ci:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:255,
        name:"clave"
        })
    clave:string;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:255,
        name:"nro_cuota"
        })
    nro_cuota:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"cant_cuota"
        })
    cant_cuota:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"vencimiento"
        })
    vencimiento:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"importe"
        })
    importe:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"nombre"
        })
    nombre:string | null;
        

    @Column("character",{ 
        nullable:true,
        default: () => "'N'",
        name:"pagado"
        })
    pagado:string | null;
        
}
