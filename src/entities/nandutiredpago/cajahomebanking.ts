import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {caja} from "./caja";


@Entity("cajahomebanking",{schema:"reddepago" } )
@Index("idx_uq_cajahomebanking_codigo",["codigo",],{unique:true})
export class cajahomebanking extends BaseEntity {

   
    @ManyToOne(type=>caja, caja=>caja.cajahomebankings,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<caja | null>;

    @RelationId((cajahomebanking: cajahomebanking) => cajahomebanking.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>caja, caja=>caja.cajahomebankings2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<caja | null>;

    @RelationId((cajahomebanking: cajahomebanking) => cajahomebanking.idcliente)
    idclienteId: Promise<number[]>;

   
    @ManyToOne(type=>caja, caja=>caja.cajahomebankings3,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idsucursal'})
    idsucursal:Promise<caja | null>;

    @RelationId((cajahomebanking: cajahomebanking) => cajahomebanking.idsucursal)
    idsucursalId: Promise<number[]>;

   
    @ManyToOne(type=>caja, caja=>caja.cajahomebankings4,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idcaja'})
    idcaja:Promise<caja | null>;

    @RelationId((cajahomebanking: cajahomebanking) => cajahomebanking.idcaja)
    idcajaId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:false,
        length:200,
        name:"clasecontroladora"
        })
    clasecontroladora:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:5,
        name:"codigo"
        })
    codigo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"colorbase"
        })
    colorbase:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"urlinternanti"
        })
    urlinternanti:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"urlwsdebito"
        })
    urlwsdebito:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"urlwscredito"
        })
    urlwscredito:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"urlalertapago"
        })
    urlalertapago:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"correosoporte"
        })
    correosoporte:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"notifcorreo"
        })
    notifcorreo:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"notifsms"
        })
    notifsms:boolean;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"certificadofirma"
        })
    certificadofirma:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"fraseclave"
        })
    fraseclave:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"firmadigital"
        })
    firmadigital:boolean;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"usuariows"
        })
    usuariows:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"contrasenhaws"
        })
    contrasenhaws:string | null;
        
}
