import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("vue_beneficiario",{schema:"redcobrosjp" } )
export class vue_beneficiario extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id_servicio"
        })
    id_servicio:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:60,
        name:"beneficiario"
        })
    beneficiario:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"institucion_referencia"
        })
    institucion_referencia:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"ruc"
        })
    ruc:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"direccion"
        })
    direccion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"telefono"
        })
    telefono:string | null;
        
}
