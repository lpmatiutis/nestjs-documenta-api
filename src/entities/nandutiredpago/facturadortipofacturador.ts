import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";
import {tipofacturador} from "./tipofacturador";


@Entity("facturadortipofacturador",{schema:"reddepago" } )
export class facturadortipofacturador extends BaseEntity {

   
    @ManyToOne(type=>facturador, facturador=>facturador.facturadortipofacturadors,{ primary:true, nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<facturador | null>;

    @RelationId((facturadortipofacturador: facturadortipofacturador) => facturadortipofacturador.idpersona)
    idpersonaId: Promise<string[]>;

   
    @ManyToOne(type=>facturador, facturador=>facturador.facturadortipofacturadors2,{ primary:true, nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<facturador | null>;

    @RelationId((facturadortipofacturador: facturadortipofacturador) => facturadortipofacturador.idcliente)
    idclienteId: Promise<string[]>;

   
    @ManyToOne(type=>tipofacturador, tipofacturador=>tipofacturador.facturadortipofacturadors,{ primary:true, nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idtipofacturador'})
    idtipofacturador:Promise<tipofacturador | null>;

    @RelationId((facturadortipofacturador: facturadortipofacturador) => facturadortipofacturador.idtipofacturador)
    idtipofacturadorId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"textobusqueda"
        })
    textobusqueda:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"principal"
        })
    principal:boolean;
        
}
