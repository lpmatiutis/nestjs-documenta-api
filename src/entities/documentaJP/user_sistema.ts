import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("user_sistema",{schema:"redcobrosjp" } )
export class user_sistema extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"usuario"
        })
    usuario:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"password"
        })
    password:string;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_usuario"
        })
    id_usuario:string;
        
}
