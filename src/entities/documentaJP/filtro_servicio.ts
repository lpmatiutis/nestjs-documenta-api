import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {red} from "./red";
import {recaudador} from "./recaudador";
import {sucursal} from "./sucursal";
import {terminal} from "./terminal";
import {servicio_rc} from "./servicio_rc";


@Entity("filtro_servicio",{schema:"redcobrosjp" } )
export class filtro_servicio extends BaseEntity {

   
    @ManyToOne(type=>red, red=>red.filtroServicios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_red'})
    idRed:Promise<red | null>;

    @RelationId((filtro_servicio: filtro_servicio) => filtro_servicio.idRed)
    idRedId: Promise<string[]>;

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.filtroServicios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_recaudador'})
    idRecaudador:Promise<recaudador | null>;

    @RelationId((filtro_servicio: filtro_servicio) => filtro_servicio.idRecaudador)
    idRecaudadorId: Promise<string[]>;

   
    @ManyToOne(type=>sucursal, sucursal=>sucursal.filtroServicios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_sucursal'})
    idSucursal:Promise<sucursal | null>;

    @RelationId((filtro_servicio: filtro_servicio) => filtro_servicio.idSucursal)
    idSucursalId: Promise<string[]>;

   
    @ManyToOne(type=>terminal, terminal=>terminal.filtroServicios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_terminal'})
    idTerminal:Promise<terminal | null>;

    @RelationId((filtro_servicio: filtro_servicio) => filtro_servicio.idTerminal)
    idTerminalId: Promise<string[]>;

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.filtroServicios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:Promise<servicio_rc | null>;

    @RelationId((filtro_servicio: filtro_servicio) => filtro_servicio.idServicio)
    idServicioId: Promise<number[]>;
}
