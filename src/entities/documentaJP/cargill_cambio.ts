import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cargill_cambio",{schema:"redcobrosjp" } )
export class cargill_cambio extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"valor"
        })
    valor:number;
        
}
