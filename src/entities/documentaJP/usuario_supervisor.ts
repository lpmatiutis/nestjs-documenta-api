import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {usuario} from "./usuario";


@Entity("usuario_supervisor",{schema:"redcobrosjp" } )
export class usuario_supervisor extends BaseEntity {

   
    @ManyToOne(type=>usuario, usuario=>usuario.usuarioSupervisors2,{ primary:true,  nullable:false, })
    @JoinColumn({ name:'usuario'})
    usuario:Promise<usuario | null>;

    @RelationId((usuario_supervisor: usuario_supervisor) => usuario_supervisor.usuario)
    usuarioId: Promise<string[]>;

   
    @ManyToOne(type=>usuario, usuario=>usuario.usuarioSupervisors,{  nullable:false, })
    @JoinColumn({ name:'supervisor'})
    supervisor:Promise<usuario | null>;

    @RelationId((usuario_supervisor: usuario_supervisor) => usuario_supervisor.supervisor)
    supervisorId: Promise<string[]>;
}
