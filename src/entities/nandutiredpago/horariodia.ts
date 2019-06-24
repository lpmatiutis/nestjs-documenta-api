import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("horariodia",{schema:"reddepago" } )
export class horariodia extends BaseEntity {

    @Column("integer",{ 
        nullable:false,
        name:"idpersona"
        })
    idpersona:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"idcliente"
        })
    idcliente:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"idsucursal"
        })
    idsucursal:number | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"idhorario"
        })
    idhorario:number;
        

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idhorariodia"
        })
    idhorariodia:number;
        

    @Column("smallint",{ 
        nullable:false,
        name:"dia"
        })
    dia:number;
        

    @Column("time without time zone",{ 
        nullable:false,
        name:"horaini"
        })
    horaini:string;
        

    @Column("time without time zone",{ 
        nullable:false,
        name:"horafin"
        })
    horafin:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        
}
