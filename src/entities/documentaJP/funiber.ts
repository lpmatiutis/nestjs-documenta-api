import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("funiber",{schema:"redcobrosjp" } )
export class funiber extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"ci"
        })
    ci:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"nombre"
        })
    nombre:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"apellido"
        })
    apellido:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"monto"
        })
    monto:number | null;
        
}
