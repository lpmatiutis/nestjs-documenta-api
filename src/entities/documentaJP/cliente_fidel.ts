import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cliente_fidel",{schema:"redcobrosjp" } )
export class cliente_fidel extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:20,
        name:"loginname"
        })
    loginname:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"nombrecompleto"
        })
    nombrecompleto:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"mail"
        })
    mail:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha"
        })
    fecha:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"celular"
        })
    celular:string | null;
        

    @Column("numeric",{ 
        nullable:false,
        precision:38,
        scale:0,
        name:"cedula"
        })
    cedula:string;
        
}
