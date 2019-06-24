import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("actualizacion_contribuyentes",{schema:"redcobrosjp" } )
export class actualizacion_contribuyentes extends BaseEntity {

    @Column("character varying",{ 
        primary: true,
        nullable:true,
        length:30,
        name:"ruc_nuevo"
        })
    ruc_nuevo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"digito_verificador"
        })
    digito_verificador:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"ruc_anterior"
        })
    ruc_anterior:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"tipo_contribuyente"
        })
    tipo_contribuyente:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"mes_cierre"
        })
    mes_cierre:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:800,
        name:"nombre_contribuyente"
        })
    nombre_contribuyente:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:500,
        name:"estado"
        })
    estado:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:60,
        name:"tipo_sociedad"
        })
    tipo_sociedad:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"tipo"
        })
    tipo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"internet"
        })
    internet:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"categoria"
        })
    categoria:string | null;
        
}
