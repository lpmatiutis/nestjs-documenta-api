import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("horario",{schema:"reddepago" } )
export class horario extends BaseEntity {

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
        

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"idhorario"
        })
    idhorario:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:200,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"activo"
        })
    activo:boolean;
        
}
