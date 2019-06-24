import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";


@Entity("rn_facturador",{schema:"redcobrosjp" } )
export class rn_facturador extends BaseEntity {

    @Column("character",{ 
        nullable:false,
        primary:true,
        length:3,
        name:"id_routing_number"
        })
    id_routing_number:string;
        

   
    @ManyToOne(type=>facturador, facturador=>facturador.rnFacturadors,{  nullable:false, })
    @JoinColumn({ name:'id_facturador'})
    idFacturador:Promise<facturador | null>;

    @RelationId((rn_facturador: rn_facturador) => rn_facturador.idFacturador)
    idFacturadorId: Promise<string[]>;
}
