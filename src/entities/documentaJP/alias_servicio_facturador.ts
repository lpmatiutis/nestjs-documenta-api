import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";
import {servicio_rc} from "./servicio_rc";
import {dato_consulta} from "./dato_consulta";


@Entity("alias_servicio_facturador",{schema:"redcobrosjp" } )
export class alias_servicio_facturador extends BaseEntity {

   
    @ManyToOne(type=>facturador, facturador=>facturador.aliasServicioFacturadors,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_facturador'})
    idFacturador:Promise<facturador | null>;

    @RelationId((alias_servicio_facturador: alias_servicio_facturador) => alias_servicio_facturador.idFacturador)
    idFacturadorId: Promise<string[]>;

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.aliasServicioFacturadors,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:Promise<servicio_rc | null>;

    @RelationId((alias_servicio_facturador: alias_servicio_facturador) => alias_servicio_facturador.idServicio)
    idServicioId: Promise<number[]>;

    @Column("integer",{ 
        nullable:false,
        name:"alias_servicio"
        })
    alias_servicio:number;
        

   
    @OneToMany(type=>dato_consulta, dato_consulta=>dato_consulta.idFacturador)
    datoConsultas:Promise<dato_consulta[]>;
    

   
    @OneToMany(type=>dato_consulta, dato_consulta=>dato_consulta.idServicio)
    datoConsultas2:Promise<dato_consulta[]>;
    
}
