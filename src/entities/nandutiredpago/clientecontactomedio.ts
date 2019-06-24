import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {clientecontacto} from "./clientecontacto";
import {tipomediocontacto} from "./tipomediocontacto";


@Entity("clientecontactomedio",{schema:"reddepago" } )
export class clientecontactomedio extends BaseEntity {

   
    @ManyToOne(type=>clientecontacto, clientecontacto=>clientecontacto.clientecontactomedios,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<clientecontacto | null>;

    @RelationId((clientecontactomedio: clientecontactomedio) => clientecontactomedio.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>clientecontacto, clientecontacto=>clientecontacto.clientecontactomedios2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<clientecontacto | null>;

    @RelationId((clientecontactomedio: clientecontactomedio) => clientecontactomedio.idcliente)
    idclienteId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idclientecontactomedio"
        })
    idclientecontactomedio:number;
        

   
    @ManyToOne(type=>tipomediocontacto, tipomediocontacto=>tipomediocontacto.clientecontactomedios,{  nullable:false, })
    @JoinColumn({ name:'idtipomediocontacto'})
    idtipomediocontacto:Promise<tipomediocontacto | null>;

    @RelationId((clientecontactomedio: clientecontactomedio) => clientecontactomedio.idtipomediocontacto)
    idtipomediocontactoId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"valor"
        })
    valor:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"activo"
        })
    activo:boolean;
        
}
