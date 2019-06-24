import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {distribucion_clearing_manual} from "./distribucion_clearing_manual";


@Entity("clearing_manual",{schema:"redcobrosjp" } )
export class clearing_manual extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_clearing_manual"
        })
    id_clearing_manual:string;
        

    @Column("character",{ 
        nullable:false,
        name:"cabecera_debito_credito"
        })
    cabecera_debito_credito:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion_beneficiario"
        })
    descripcion_beneficiario:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha"
        })
    fecha:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_acreditacion"
        })
    fecha_acreditacion:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora_creacion"
        })
    fecha_hora_creacion:Date;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"monto_distribuido"
        })
    monto_distribuido:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"numero_cuenta"
        })
    numero_cuenta:string;
        

   
    @OneToMany(type=>distribucion_clearing_manual, distribucion_clearing_manual=>distribucion_clearing_manual.clearingManual)
    distribucionClearingManuals:Promise<distribucion_clearing_manual[]>;
    
}
