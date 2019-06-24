import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tabla_temp2",{schema:"redcobrosjp" } )
export class tabla_temp2 extends BaseEntity {

    @Column("character varying",{ 
        nullable:true,
        primary: true,
        length:200,
        name:"transaccion"
        })
    transaccion:string | null;
        
}
