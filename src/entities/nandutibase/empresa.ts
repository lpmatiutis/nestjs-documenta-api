import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {rol} from "./rol";
import {unidadsoftware} from "./unidadsoftware";
import {usuarioempresa} from "./usuarioempresa";


@Entity("empresa",{schema:"base" } )
@Index("idx_uq_empresa_razonsocial",["razonsocial",],{unique:true})
export class empresa extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idempresa"
        })
    idempresa:number;
        

    @Column("character varying",{ 
        nullable:true,
        unique: true,
        length:50,
        name:"razonsocial"
        })
    razonsocial:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"representantelegal"
        })
    representantelegal:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"ruc"
        })
    ruc:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"rucrepresentantelegal"
        })
    rucrepresentantelegal:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"telefono"
        })
    telefono:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"celular"
        })
    celular:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:50,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"direccion"
        })
    direccion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"localidad"
        })
    localidad:string | null;
        

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
        

   
    @OneToMany(type=>rol, rol=>rol.idempresa,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    rols:Promise<rol[]>;
    

   
    @OneToMany(type=>unidadsoftware, unidadsoftware=>unidadsoftware.idempresa,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    unidadsoftwares:Promise<unidadsoftware[]>;
    

   
    @OneToMany(type=>usuarioempresa, usuarioempresa=>usuarioempresa.idempresa,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    usuarioempresas:Promise<usuarioempresa[]>;
    
}
