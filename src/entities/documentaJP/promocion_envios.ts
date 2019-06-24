import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {promo_personal_rec} from "./promo_personal_rec";


@Entity("promocion_envios",{schema:"redcobrosjp" } )
export class promocion_envios extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_promocion_envios"
        })
    id_promocion_envios:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_ini"
        })
    fecha_ini:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_fin"
        })
    fecha_fin:Date | null;
        

    @Column("character",{ 
        nullable:true,
        name:"estado"
        })
    estado:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"observacion"
        })
    observacion:string | null;
        

   
    @OneToMany(type=>promo_personal_rec, promo_personal_rec=>promo_personal_rec.promocion)
    promoPersonalRecs:Promise<promo_personal_rec[]>;
    
}
