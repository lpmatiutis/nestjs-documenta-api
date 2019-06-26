import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("sys_param",{schema:"base" } )
export class sys_param extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idcompany"
        })
    idcompany:number;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:100,
        name:"key"
        })
    key:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"value"
        })
    value:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"defaultvalue"
        })
    defaultvalue:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"comment"
        })
    comment:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"required"
        })
    required:boolean;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"type"
        })
    type:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        default: () => "now()",
        name:"datelastupd"
        })
    datelastupd:Date;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"name"
        })
    name:string | null;
        
}
