import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {homebankingtipocuenta} from "./homebankingtipocuenta";
import {homebankingcuentahis} from "./homebankingcuentahis";
import {transaccion_hb} from "./transaccion_hb";


@Entity("homebankingcuenta",{schema:"redcobrosjp" } )
export class homebankingcuenta extends BaseEntity {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        //length:5,
        name:"codigohb"
        })
    codigohb:string;
        

   
    @ManyToOne(type=>homebankingtipocuenta, homebankingtipocuenta=>homebankingtipocuenta.homebankingcuentas,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idhomebankingtipocuenta'})
    idhomebankingtipocuenta:Promise<homebankingtipocuenta | null>;

    @RelationId((homebankingcuenta: homebankingcuenta) => homebankingcuenta.idhomebankingtipocuenta)
    idhomebankingtipocuentaId: Promise<number[]>;

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:50,
        name:"nrocuenta"
        })
    nrocuenta:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"nrodocumento"
        })
    nrodocumento:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"titular"
        })
    titular:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:10,
        name:"nrocelular"
        })
    nrocelular:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:150,
        name:"correo"
        })
    correo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:8,
        name:"fecven"
        })
    fecven:string | null;
        

   
    @OneToMany(type=>homebankingcuentahis, homebankingcuentahis=>homebankingcuentahis.codigohb,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    homebankingcuentahiss:Promise<homebankingcuentahis[]>;
    

   
    @OneToMany(type=>homebankingcuentahis, homebankingcuentahis=>homebankingcuentahis.idhomebankingtipocuenta,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    homebankingcuentahiss2:Promise<homebankingcuentahis[]>;
    

   
    @OneToMany(type=>homebankingcuentahis, homebankingcuentahis=>homebankingcuentahis.nrocuenta,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    homebankingcuentahiss3:Promise<homebankingcuentahis[]>;
    

   
    @OneToMany(type=>transaccion_hb, transaccion_hb=>transaccion_hb.codigohb,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transaccionHbs:Promise<transaccion_hb[]>;
    

   
    @OneToMany(type=>transaccion_hb, transaccion_hb=>transaccion_hb.idhomebankingtipocuenta,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transaccionHbs2:Promise<transaccion_hb[]>;
    

   
    @OneToMany(type=>transaccion_hb, transaccion_hb=>transaccion_hb.nrocuenta,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    transaccionHbs3:Promise<transaccion_hb[]>;
    
}
