import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {clearing_manual} from "./clearing_manual";


@Entity("distribucion_clearing_manual",{schema:"redcobrosjp" } )
export class distribucion_clearing_manual extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_dist_clearing_manual"
        })
    id_dist_clearing_manual:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion_beneficiario"
        })
    descripcion_beneficiario:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"monto"
        })
    monto:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"numero_cuenta"
        })
    numero_cuenta:string;
        

   
    @ManyToOne(type=>clearing_manual, clearing_manual=>clearing_manual.distribucionClearingManuals,{  nullable:false, })
    @JoinColumn({ name:'clearing_manual'})
    clearingManual:Promise<clearing_manual | null>;

    @RelationId((distribucion_clearing_manual: distribucion_clearing_manual) => distribucion_clearing_manual.clearingManual)
    clearingManualId: Promise<string[]>;
}
