import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {direccion} from "./direccion";
import {recaudador} from "./recaudador";
import {caja} from "./caja";


@Entity("sucursal",{schema:"reddepago" } )
export class sucursal extends BaseEntity {

   
    @ManyToOne(type=>direccion, direccion=>direccion.sucursals,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<direccion | null>;

    @RelationId((sucursal: sucursal) => sucursal.idpersona)
    idpersonaId: Promise<number[]>;
    @ManyToOne(type=>recaudador, recaudador=>recaudador.sucursals,{ primary:true, nullable:false, })
    @JoinColumn({ name:'idpersona'})
    idpersonar:Promise<recaudador | null>;

    @RelationId((sucursal: sucursal) => sucursal.idpersona)
    idpersonaIdr: Promise<number[]>;

   
    @ManyToOne(type=>direccion, direccion=>direccion.sucursals2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<direccion | null>;

    @RelationId((sucursal: sucursal) => sucursal.idcliente)
    idclienteId: Promise<number[]>;
    @ManyToOne(type=>recaudador, recaudador=>recaudador.sucursals2,{ primary:true, nullable:false, })
    @JoinColumn({ name:'idcliente'})
    idclienter:Promise<recaudador | null>;

    @RelationId((sucursal: sucursal) => sucursal.idcliente)
    idclienteIdr: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idsucursal"
        })
    idsucursal:number;
        

   
    @ManyToOne(type=>direccion, direccion=>direccion.sucursals3,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'iddireccion'})
    iddireccion:Promise<direccion | null>;

    @RelationId((sucursal: sucursal) => sucursal.iddireccion)
    iddireccionId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:false,
        length:360,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:500,
        name:"etiquetaticket"
        })
    etiquetaticket:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"iddocumenta"
        })
    iddocumenta:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        default: () => "0",
        name:"idcodigoset"
        })
    idcodigoset:string | null;
        

   
    @OneToMany(type=>caja, caja=>caja.idpersona)
    cajas:Promise<caja[]>;
    

   
    @OneToMany(type=>caja, caja=>caja.idcliente)
    cajas2:Promise<caja[]>;
    

   
    @OneToMany(type=>caja, caja=>caja.idsucursal)
    cajas3:Promise<caja[]>;
    
}
