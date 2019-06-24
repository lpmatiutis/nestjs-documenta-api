import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("digito_asociados",{schema:"redcobrosjp" } )
export class digito_asociados extends BaseEntity {

    @Column("bigint",{ 
        nullable:true,
        primary: true,
        name:"cod_socio"
        })
    cod_socio:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"cedula"
        })
    cedula:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"nombre"
        })
    nombre:string | null;
        
}
