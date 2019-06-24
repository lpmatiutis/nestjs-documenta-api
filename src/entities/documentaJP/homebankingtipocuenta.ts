import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {homebankingcuenta} from "./homebankingcuenta";


@Entity("homebankingtipocuenta",{schema:"redcobrosjp" } )
@Index("idx_uq_homebankingtipocuenta_codigo",["codigo",],{unique:true})
@Index("idx_uq_homebankingtipocuenta_descripcion",["descripcion",],{unique:true})
export class homebankingtipocuenta extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"idhomebankingtipocuenta"
        })
    idhomebankingtipocuenta:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:70,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"codigo"
        })
    codigo:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"activo"
        })
    activo:boolean;
        

   
    @OneToMany(type=>homebankingcuenta, homebankingcuenta=>homebankingcuenta.idhomebankingtipocuenta,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    homebankingcuentas:Promise<homebankingcuenta[]>;
    
}
