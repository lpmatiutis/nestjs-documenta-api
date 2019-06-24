import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("uni_referencias2",{schema:"redcobrosjp" } )
export class uni_referencias2 extends BaseEntity {

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"total"
        })
    total:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"idcargopagouni"
        })
    idcargopagouni:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"facultad"
        })
    facultad:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"nrocuotauni"
        })
    nrocuotauni:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"codaranceluni"
        })
    codaranceluni:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        primary: true,
        length:20,
        name:"cedulauni"
        })
    cedulauni:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"origeningresouni"
        })
    origeningresouni:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"id"
        })
    id:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"nombre"
        })
    nombre:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"multa"
        })
    multa:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"motivo"
        })
    motivo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"arancel"
        })
    arancel:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"carrerauni"
        })
    carrerauni:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"fechavenceuni"
        })
    fechavenceuni:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"monto"
        })
    monto:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_transaccion"
        })
    id_transaccion:string | null;
        
}
