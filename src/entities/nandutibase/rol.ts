import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {empresa} from "./empresa";
// import {rolprograma} from "./rolprograma";
import {usuarioempresarol} from "./usuarioempresarol";


@Entity("rol",{schema:"base" } )
@Index("idx_uq_rol_descripcion",["descripcion","idempresa",],{unique:true})
@Index("rol_gruporealm_key",["gruporealm",],{unique:true})
export class rol extends BaseEntity {

   
    @ManyToOne(type=>empresa, empresa=>empresa.rols,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idempresa'})
    idempresa:Promise<empresa | null>;

    @RelationId((rol: rol) => rol.idempresa)
    idempresaId: Promise<number[]>;

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idrol"
        })
    idrol:number;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:50,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        name:"gruporealm"
        })
    gruporealm:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"nota"
        })
    nota:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        name:"sistema"
        })
    sistema:boolean;
        

   
    // @OneToMany(type=>rolprograma, rolprograma=>rolprograma.idempresa,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    // rolprogramas:Promise<rolprograma[]>;
    

   
    // @OneToMany(type=>rolprograma, rolprograma=>rolprograma.idrol,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    // rolprogramas2:Promise<rolprograma[]>;
    

   
    @OneToMany(type=>usuarioempresarol, usuarioempresarol=>usuarioempresarol.idempresa,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    usuarioempresarols:Promise<usuarioempresarol[]>;
    

   
    @OneToMany(type=>usuarioempresarol, usuarioempresarol=>usuarioempresarol.idrol,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    usuarioempresarols2:Promise<usuarioempresarol[]>;
    

   
    @OneToMany(type=>usuarioempresarol, usuarioempresarol=>usuarioempresarol.gruporealm,{ onDelete: 'RESTRICT' ,onUpdate: 'CASCADE' })
    usuarioempresarols3:Promise<usuarioempresarol[]>;
    
}
