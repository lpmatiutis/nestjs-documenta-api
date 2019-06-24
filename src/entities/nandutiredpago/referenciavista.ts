import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {serviciometodoref} from "./serviciometodoref";


@Entity("referenciavista",{schema:"reddepago" } )
@Index("idx_uq_referenciavista_uiorden",["idcliente","idpersona","idservicio","idserviciometodo","uiorden",],{unique:true})
export class referenciavista extends BaseEntity {

   
    @ManyToOne(type=>serviciometodoref, serviciometodoref=>serviciometodoref.referenciavistas,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idpersona'})
    idpersona:Promise<serviciometodoref | null>;

    @RelationId((referenciavista: referenciavista) => referenciavista.idpersona)
    idpersonaId: Promise<number[]>;

   
    @ManyToOne(type=>serviciometodoref, serviciometodoref=>serviciometodoref.referenciavistas2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idcliente'})
    idcliente:Promise<serviciometodoref | null>;

    @RelationId((referenciavista: referenciavista) => referenciavista.idcliente)
    idclienteId: Promise<number[]>;

   
    @ManyToOne(type=>serviciometodoref, serviciometodoref=>serviciometodoref.referenciavistas3,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idservicio'})
    idservicio:Promise<serviciometodoref | null>;

    @RelationId((referenciavista: referenciavista) => referenciavista.idservicio)
    idservicioId: Promise<number[]>;

   
    @ManyToOne(type=>serviciometodoref, serviciometodoref=>serviciometodoref.referenciavistas4,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idserviciometodo'})
    idserviciometodo:Promise<serviciometodoref | null>;

    @RelationId((referenciavista: referenciavista) => referenciavista.idserviciometodo)
    idserviciometodoId: Promise<string[]>;

   
    @ManyToOne(type=>serviciometodoref, serviciometodoref=>serviciometodoref.referenciavistas5,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'idserviciometodoref'})
    idserviciometodoref:Promise<serviciometodoref | null>;

    @RelationId((referenciavista: referenciavista) => referenciavista.idserviciometodoref)
    idserviciometodorefId: Promise<number[]>;

    @Column("integer",{ 
        nullable:false,
        name:"idtipoobjeto"
        })
    idtipoobjeto:number;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "0",
        name:"uiorden"
        })
    uiorden:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:40,
        name:"uietiqueta"
        })
    uietiqueta:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"uimascara"
        })
    uimascara:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"uihttptype"
        })
    uihttptype:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"uihttpname"
        })
    uihttpname:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"uihttprequired"
        })
    uihttprequired:boolean;
        

    @Column("character varying",{ 
        nullable:false,
        length:40,
        name:"uihttpplaceholder"
        })
    uihttpplaceholder:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"uihttptooltip"
        })
    uihttptooltip:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"uihttpstyle"
        })
    uihttpstyle:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"uihttpdefaultvalue"
        })
    uihttpdefaultvalue:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        name:"uihttpvalues"
        })
    uihttpvalues:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"jsfvalidador"
        })
    jsfvalidador:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"uihttpdisplay"
        })
    uihttpdisplay:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"uihttpmultidataentry"
        })
    uihttpmultidataentry:boolean;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "3",
        name:"uihttpminlength"
        })
    uihttpminlength:number;
        

    @Column("json",{ 
        nullable:true,
        name:"uihttpvalues2"
        })
    uihttpvalues2:Object | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"triggervalid"
        })
    triggervalid:boolean | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"archivomodal"
        })
    archivomodal:string | null;
        
}
