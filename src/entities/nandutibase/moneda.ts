import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("moneda",{schema:"base" } )
export class moneda extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idmoneda"
        })
    idmoneda:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:5,
        name:"simbolo"
        })
    simbolo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"mascaraentrada"
        })
    mascaraentrada:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"mascarasalida"
        })
    mascarasalida:string;
        

    @Column("integer",{ 
        nullable:false,
        default: () => "0",
        name:"decimales"
        })
    decimales:number;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("bigint",{ 
        nullable:true,
        name:"iddocumenta"
        })
    iddocumenta:string | null;
        
}
