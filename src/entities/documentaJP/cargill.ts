import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cargill",{schema:"redcobrosjp" } )
@Index("cargill_index1",["cod_cliente","id_fiscal",])
export class cargill extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"cod_cliente"
        })
    cod_cliente:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"nombre"
        })
    nombre:string | null;
        

    @Column("character",{ 
        nullable:true,
        name:"retentor_iva"
        })
    retentor_iva:string | null;
        

    @Column("character",{ 
        nullable:true,
        name:"cheque_dif"
        })
    cheque_dif:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"id_fiscal"
        })
    id_fiscal:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"ciudad"
        })
    ciudad:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"departamento"
        })
    departamento:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"pais"
        })
    pais:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"unidad_owner"
        })
    unidad_owner:string | null;
        

    @Column("character",{ 
        nullable:true,
        default: () => "'S'",
        name:"catastrado"
        })
    catastrado:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"telefono"
        })
    telefono:string | null;
        
}
