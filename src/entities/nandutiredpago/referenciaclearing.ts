import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("referenciaclearing",{schema:"reddepago" } )
export class referenciaclearing extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idpersona"
        })
    idpersona:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idcliente"
        })
    idcliente:number;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idservicio"
        })
    idservicio:number;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"idserviciometodo"
        })
    idserviciometodo:string;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idserviciometodoref"
        })
    idserviciometodoref:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"mascara"
        })
    mascara:number;
        

    @Column("text",{ 
        nullable:true,
        name:"obs"
        })
    obs:string | null;
        
}
