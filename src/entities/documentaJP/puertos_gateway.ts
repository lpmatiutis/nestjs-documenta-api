import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("puertos_gateway",{schema:"redcobrosjp" } )
export class puertos_gateway extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:38,
        scale:0,
        name:"id_puerto"
        })
    id_puerto:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:15,
        name:"indice"
        })
    indice:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:15,
        name:"operadora"
        })
    operadora:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:2,
        name:"activo"
        })
    activo:string | null;
        
}
