import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("recaudador_formulario",{schema:"redcobrosjp" } )
export class recaudador_formulario extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"recaudador"
        })
    recaudador:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"monto"
        })
    monto:number;
        
}
