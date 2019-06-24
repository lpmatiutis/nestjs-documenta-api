import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("servicios_practigiros",{schema:"redcobrosjp" } )
export class servicios_practigiros extends BaseEntity {

    @Column("bigint",{ 
        nullable:true,
        primary: true,
        name:"id_servicio"
        })
    id_servicio:string | null;
        
}
