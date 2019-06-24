import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("facturas_tigo",{schema:"redcobrosjp" } )
export class facturas_tigo extends BaseEntity {

    @Column("numeric",{ 
        nullable:false,
        primary:true,
        precision:30,
        scale:0,
        name:"tipo"
        })
    tipo:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:60,
        name:"factura"
        })
    factura:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"cobrable"
        })
    cobrable:string | null;
        
}
