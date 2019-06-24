import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("respuestaconsulta",{schema:"reddepago" } )
export class respuestaconsulta extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"idrespuesta"
        })
    idrespuesta:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"idconversacion"
        })
    idconversacion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"nrodocdeudor"
        })
    nrodocdeudor:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"nombredeudor"
        })
    nombredeudor:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"descripciondeuda"
        })
    descripciondeuda:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"nroprestamo"
        })
    nroprestamo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"nrocuota"
        })
    nrocuota:string | null;
        

    @Column("date",{ 
        nullable:true,
        name:"fecven"
        })
    fecven:string | null;
        

    @Column("integer",{ 
        nullable:true,
        default: () => "0",
        name:"diasmora"
        })
    diasmora:number | null;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "0",
        precision:12,
        scale:2,
        name:"montointmora"
        })
    montointmora:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "0",
        precision:12,
        scale:2,
        name:"montointcorriente"
        })
    montointcorriente:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "0",
        precision:12,
        scale:2,
        name:"montodescuento"
        })
    montodescuento:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "0",
        precision:12,
        scale:2,
        name:"montoamortizacion"
        })
    montoamortizacion:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "0",
        precision:12,
        scale:2,
        name:"montoapagar"
        })
    montoapagar:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "0",
        precision:12,
        scale:2,
        name:"montoacumulado"
        })
    montoacumulado:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "0",
        precision:12,
        scale:2,
        name:"comisionprocesadora"
        })
    comisionprocesadora:string | null;
        

    @Column("xml",{ 
        nullable:true,
        name:"dato_adicional"
        })
    dato_adicional:string | null;
        
}
