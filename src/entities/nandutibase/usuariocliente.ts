import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {usuario} from "./usuario";


@Entity("usuariocliente",{schema:"base" } )
export class usuariocliente extends BaseEntity {

   
    @ManyToOne(type=>usuario, usuario=>usuario.usuarioclientes,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idusuario'})
    idusuario:Promise<usuario | null>;

    @RelationId((usuariocliente: usuariocliente) => usuariocliente.idusuario)
    idusuarioId: Promise<number[]>;

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
        nullable:true,
        name:"idsucursal"
        })
    idsucursal:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"esprincipal"
        })
    esprincipal:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"autologueo"
        })
    autologueo:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fechaultbloqueo"
        })
    fechaultbloqueo:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fechaultdesbloqueo"
        })
    fechaultdesbloqueo:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"obs"
        })
    obs:string | null;
        
}
