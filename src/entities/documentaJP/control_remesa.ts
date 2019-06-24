import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("control_remesa",{schema:"redcobrosjp" } )
export class control_remesa extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"recaudador"
        })
    recaudador:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"monto_enviado"
        })
    monto_enviado:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"tope"
        })
    tope:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        primary:true,
        name:"fecha"
        })
    fecha:Date;
        
}
