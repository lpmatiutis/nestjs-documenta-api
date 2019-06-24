import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {dispositivo} from "./dispositivo";
import {dispositivoserial} from "./dispositivoserial";


@Entity("tipodispositivo",{schema:"reddepago" } )
@Index("tipodispositivo_descripcion_key",["descripcion",],{unique:true})
export class tipodispositivo extends BaseEntity {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idtipodispositivo"
        })
    idtipodispositivo:number;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        length:70,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:20,
        name:"iconomtcss"
        })
    iconomtcss:string;
        

   
    @OneToMany(type=>dispositivo, dispositivo=>dispositivo.idtipodispositivo,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    dispositivos:Promise<dispositivo[]>;
    

   
    @OneToMany(type=>dispositivoserial, dispositivoserial=>dispositivoserial.idtipodispositivo,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    dispositivoserials:Promise<dispositivoserial[]>;
    
}
