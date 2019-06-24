import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {cliente} from "./cliente";
import {tipocontacto} from "./tipocontacto";
import {clientecontactomedio} from "./clientecontactomedio";


@Entity("clientecontacto",{schema:"reddepago" } )
export class clientecontacto extends BaseEntity {

   
    @ManyToOne(type=>cliente, cliente=>cliente.clientecontactos,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<cliente | null>;

    @RelationId((clientecontacto: clientecontacto) => clientecontacto.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>cliente, cliente=>cliente.clientecontactos2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<cliente | null>;

    @RelationId((clientecontacto: clientecontacto) => clientecontacto.idcliente)
    idclienteId: Promise<number[]>;

    @Column("integer",{ 
        nullable:false,
        name:"idsucursal"
        })
    idsucursal:number;
        

   
    @ManyToOne(type=>tipocontacto, tipocontacto=>tipocontacto.clientecontactos,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtipocontacto'})
    idtipocontacto:Promise<tipocontacto | null>;

    @RelationId((clientecontacto: clientecontacto) => clientecontacto.idtipocontacto)
    idtipocontactoId: Promise<number[]>;

    @Column("integer",{ 
        nullable:false,
        name:"idpesonacontacto"
        })
    idpesonacontacto:number;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

   
    @OneToMany(type=>clientecontactomedio, clientecontactomedio=>clientecontactomedio.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    clientecontactomedios:Promise<clientecontactomedio[]>;
    

   
    @OneToMany(type=>clientecontactomedio, clientecontactomedio=>clientecontactomedio.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    clientecontactomedios2:Promise<clientecontactomedio[]>;
    
}
