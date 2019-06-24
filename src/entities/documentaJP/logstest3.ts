import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("logstest3",{schema:"redcobrosjp" } )
export class logstest3 extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"user_id"
        })
    user_id:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"dated"
        })
    dated:Date;
        

    @Column("character varying",{ 
        nullable:false,
        length:50,
        name:"logger"
        })
    logger:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"level"
        })
    level:string;
        

    @Column("text",{ 
        nullable:false,
        name:"servertest"
        })
    servertest:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:40,
        name:"aplicacion"
        })
    aplicacion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"ip"
        })
    ip:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:1000,
        name:"message"
        })
    message:string;
        

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"log_id"
        })
    log_id:number;
        
}
