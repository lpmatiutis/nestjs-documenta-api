import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("numeros_bloqueados",{schema:"redcobrosjp" } )
export class numeros_bloqueados extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:255,
        name:"numero_bloqueado"
        })
    numero_bloqueado:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:1,
        default: () => "'S'",
        name:"bloqueado"
        })
    bloqueado:string;
        
}
