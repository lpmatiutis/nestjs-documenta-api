import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {caja} from "./caja";
import {cajaserviciooperacion} from "./cajaserviciooperacion";


@Entity("tipodestinoticket",{schema:"reddepago" } )
@Index("idx_uq_tipodestinoticket_codigo",["codigo",],{unique:true})
@Index("idx_uq_tipodestinoticket_descripcion",["descripcion",],{unique:true})
export class tipodestinoticket extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idtipodestinoticket"
        })
    idtipodestinoticket:number;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"obs"
        })
    obs:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        unique: true,
        length:5,
        name:"codigo"
        })
    codigo:string | null;
        

   
    @OneToMany(type=>caja, caja=>caja.iddestinoimpresion,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajas:Promise<caja[]>;
    

   
    @OneToMany(type=>cajaserviciooperacion, cajaserviciooperacion=>cajaserviciooperacion.idtipodestinoticket,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    cajaserviciooperacions:Promise<cajaserviciooperacion[]>;
    
}
