import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {cliente} from "./cliente";


@Entity("clientecomisionista",{schema:"reddepago" } )
export class clientecomisionista extends BaseEntity {

   
    @ManyToOne(type=>cliente, cliente=>cliente.clientecomisionistas,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<cliente | null>;

    @RelationId((clientecomisionista: clientecomisionista) => clientecomisionista.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>cliente, cliente=>cliente.clientecomisionistas2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<cliente | null>;

    @RelationId((clientecomisionista: clientecomisionista) => clientecomisionista.idcliente)
    idclienteId: Promise<number[]>;

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        default: () => "now()",
        name:"aud_fecalta"
        })
    aud_fecalta:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"aud_idusuarioalta"
        })
    aud_idusuarioalta:number;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"aud_fecmodif"
        })
    aud_fecmodif:Date | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"aud_idusuariomodif"
        })
    aud_idusuariomodif:number | null;
        

    @Column("numeric",{ 
        nullable:false,
        precision:6,
        scale:3,
        name:"porccomision"
        })
    porccomision:string;
        

    @Column("date",{ 
        nullable:false,
        name:"dateini"
        })
    dateini:string;
        

    @Column("text",{ 
        nullable:true,
        name:"obs"
        })
    obs:string | null;
        
}
