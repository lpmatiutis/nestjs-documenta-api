import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("iso_pais",{schema:"redcobrosjp" } )
export class iso_pais extends BaseEntity {

    @Column("smallint",{ 
        nullable:false,
        primary:true,
        name:"cod_numerico"
        })
    cod_numerico:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:200,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"cod_alfa_2"
        })
    cod_alfa_2:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"cod_alfa_3"
        })
    cod_alfa_3:string | null;
        
}
