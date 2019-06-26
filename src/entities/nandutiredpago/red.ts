import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {cliente} from "./cliente";
import {redoperacion} from "./redoperacion";


@Entity("red",{schema:"reddepago" } )
export class red extends BaseEntity {

   
    @ManyToOne(type=>cliente, cliente=>cliente.reds,{ primary:true, nullable:false, eager: true, cascade: true, onDelete: 'RESTRICT',onUpdate: 'RESTRICT'})
    @JoinColumn({ name:'idpersona'})
    idpersona:cliente | null;

    @RelationId((red: red) => red.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>cliente, cliente=>cliente.reds2,{ primary:true, nullable:false, eager:true, cascade:true, onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:cliente | null;

    @RelationId((red: red) => red.idcliente)
    idclienteId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"codigo"
        })
    codigo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"colorbase"
        })
    colorbase:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"iddocumenta"
        })
    iddocumenta:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        default: () => "47",
        name:"codera"
        })
    codera:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"clubcajero"
        })
    clubcajero:boolean;
        

   
    @OneToMany(type=>redoperacion, redoperacion=>redoperacion.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    redoperacions:Promise<redoperacion[]>;
    

   
    @OneToMany(type=>redoperacion, redoperacion=>redoperacion.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    redoperacions2:Promise<redoperacion[]>;
    
}
