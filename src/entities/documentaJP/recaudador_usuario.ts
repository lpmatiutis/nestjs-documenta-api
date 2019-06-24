import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("recaudador_usuario",{schema:"redcobrosjp" } )
export class recaudador_usuario extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"recaudador"
        })
    recaudador:string;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"usuario"
        })
    usuario:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"tipo_user"
        })
    tipo_user:string | null;
        
}
