import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {entidad} from "./entidad";


@Entity("cuenta_entidad",{schema:"redcobrosjp" } )
export class cuenta_entidad extends BaseEntity {

   
    @ManyToOne(type=>entidad, entidad=>entidad.cuentaEntidads,{  nullable:false, })
    @JoinColumn({ name:'id_entidad'})
    idEntidad:Promise<entidad | null>;

    @RelationId((cuenta_entidad: cuenta_entidad) => cuenta_entidad.idEntidad)
    idEntidadId: Promise<string[]>;

    @Column("bigint",{ 
        nullable:true,
        name:"cuenta"
        })
    cuenta:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:3,
        name:"tipo_cuenta"
        })
    tipo_cuenta:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_entidad_cuenta"
        })
    id_entidad_cuenta:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"servicio"
        })
    servicio:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:2,
        default: () => "'CD'",
        name:"tipo_mov"
        })
    tipo_mov:string | null;
        
}
