import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("contribuyentes_bloqueados",{schema:"redcobrosjp" } )
export class contribuyentes_bloqueados extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:255,
        name:"ruc_nuevo"
        })
    ruc_nuevo:string;
        
}
