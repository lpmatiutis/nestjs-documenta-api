import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {clientecomisionista} from "./clientecomisionista";
import {clientecontacto} from "./clientecontacto";
import {clientecuenta} from "./clientecuenta";
import {direccion} from "./direccion";
import {facturador} from "./facturador";
import {noticia} from "./noticia";
import {recaudador} from "./recaudador";
import {red} from "./red";


@Entity("cliente",{schema:"reddepago" } )
export class cliente extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idpersona"
        })
    idpersona:number;
        

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idcliente"
        })
    idcliente:number;
        

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
        

    @Column("date",{ 
        nullable:true,
        name:"fecbajadefinitiva"
        })
    fecbajadefinitiva:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"idusuariobaja"
        })
    idusuariobaja:number | null;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "0",
        name:"diasvigenciapwd"
        })
    diasvigenciapwd:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"correoresponsable"
        })
    correoresponsable:string | null;
        

   
    @OneToMany(type=>clientecomisionista, clientecomisionista=>clientecomisionista.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    clientecomisionistas:Promise<clientecomisionista[]>;
    

   
    @OneToMany(type=>clientecomisionista, clientecomisionista=>clientecomisionista.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    clientecomisionistas2:Promise<clientecomisionista[]>;
    

   
    @OneToMany(type=>clientecontacto, clientecontacto=>clientecontacto.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    clientecontactos:Promise<clientecontacto[]>;
    

   
    @OneToMany(type=>clientecontacto, clientecontacto=>clientecontacto.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    clientecontactos2:Promise<clientecontacto[]>;
    

   
    @OneToMany(type=>clientecuenta, clientecuenta=>clientecuenta.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    clientecuentas:Promise<clientecuenta[]>;
    

   
    @OneToMany(type=>clientecuenta, clientecuenta=>clientecuenta.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    clientecuentas2:Promise<clientecuenta[]>;
    

   
    @OneToMany(type=>direccion, direccion=>direccion.idpersona)
    direccions:Promise<direccion[]>;
    

   
    @OneToMany(type=>direccion, direccion=>direccion.idcliente)
    direccions2:Promise<direccion[]>;
    

   
    @OneToMany(type=>facturador, facturador=>facturador.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    facturadors:Promise<facturador[]>;
    

   
    @OneToMany(type=>facturador, facturador=>facturador.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    facturadors2:Promise<facturador[]>;
    

   
    @OneToMany(type=>noticia, noticia=>noticia.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    noticias:Promise<noticia[]>;
    

   
    @OneToMany(type=>noticia, noticia=>noticia.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    noticias2:Promise<noticia[]>;
    

   
    @OneToMany(type=>recaudador, recaudador=>recaudador.idpersona,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    recaudadors:Promise<recaudador[]>;
    

   
    @OneToMany(type=>recaudador, recaudador=>recaudador.idcliente,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    recaudadors2:Promise<recaudador[]>;
    

   
    @OneToMany(type=>red, red=>red.idpersona,{lazy:true, onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    reds:Promise<red[]>;
    

   
    @OneToMany(type=>red, red=>red.idcliente,{lazy:true, onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    reds2:Promise<red[]>;
    
}
