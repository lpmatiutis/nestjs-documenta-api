import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {recaudador} from "./recaudador";
import {servicio_rc} from "./servicio_rc";
import {tope_diario_rec_ser} from "./tope_diario_rec_ser";


@Entity("recaudador_servicio",{schema:"redcobrosjp" } )
@Index("recaudador_servicio_un",["idRecaudador","idServicio",],{unique:true})
export class recaudador_servicio extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id_recaudador_servicio"
        })
    id_recaudador_servicio:number;
        

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.recaudadorServicios,{  nullable:false, })
    @JoinColumn({ name:'id_recaudador'})
    idRecaudador:Promise<recaudador | null>;

    @RelationId((recaudador_servicio: recaudador_servicio) => recaudador_servicio.idRecaudador)
    idRecaudadorId: Promise<string[]>;

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.recaudadorServicios,{  nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:Promise<servicio_rc | null>;

    @RelationId((recaudador_servicio: recaudador_servicio) => recaudador_servicio.idServicio)
    idServicioId: Promise<number[]>;

    @Column("double precision",{ 
        nullable:false,
        default: () => "0",
        precision:53,
        name:"tope_diario"
        })
    tope_diario:number;
        

    @Column("double precision",{ 
        nullable:false,
        default: () => "0",
        precision:53,
        name:"tope_mensual"
        })
    tope_mensual:number;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"tope_habilitado"
        })
    tope_habilitado:string;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'S'",
        name:"servicio_habilitado"
        })
    servicio_habilitado:string;
        

    @Column("double precision",{ 
        nullable:false,
        default: () => "0",
        precision:53,
        name:"tope_transaccion"
        })
    tope_transaccion:number;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"tope_fecha"
        })
    tope_fecha:string;
        

   
    @OneToMany(type=>tope_diario_rec_ser, tope_diario_rec_ser=>tope_diario_rec_ser.idRecaudadorServicio)
    topeDiarioRecSers:Promise<tope_diario_rec_ser[]>;
    
}
