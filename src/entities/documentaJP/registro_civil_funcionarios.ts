import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("registro_civil_funcionarios",{schema:"redcobrosjp" } )
export class registro_civil_funcionarios extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:6,
        scale:0,
        name:"id_funcionario"
        })
    id_funcionario:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"documento"
        })
    documento:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:200,
        name:"nombre"
        })
    nombre:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"dependencia"
        })
    dependencia:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"cargo"
        })
    cargo:string | null;
        
}
