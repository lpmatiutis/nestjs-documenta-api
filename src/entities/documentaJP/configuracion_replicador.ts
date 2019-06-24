import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("configuracion_replicador",{schema:"redcobrosjp" } )
export class configuracion_replicador extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:255,
        name:"nombre"
        })
    nombre:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"valor"
        })
    valor:string | null;
        
}
