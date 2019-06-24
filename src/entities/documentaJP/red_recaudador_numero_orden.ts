import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {recaudador} from "./recaudador";
import {red} from "./red";


@Entity("red_recaudador_numero_orden",{schema:"redcobrosjp" } )
export class red_recaudador_numero_orden extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_red_recaudador_numero_orden"
        })
    id_red_recaudador_numero_orden:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora"
        })
    fecha_hora:Date;
        

    @Column("bigint",{ 
        nullable:false,
        name:"numero_final"
        })
    numero_final:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"numero_inicial"
        })
    numero_inicial:string;
        

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.redRecaudadorNumeroOrdens,{  nullable:false, })
    @JoinColumn({ name:'recaudador'})
    recaudador:Promise<recaudador | null>;

    @RelationId((red_recaudador_numero_orden: red_recaudador_numero_orden) => red_recaudador_numero_orden.recaudador)
    recaudadorId: Promise<string[]>;

   
    @ManyToOne(type=>red, red=>red.redRecaudadorNumeroOrdens,{  nullable:false, })
    @JoinColumn({ name:'red'})
    red:Promise<red | null>;

    @RelationId((red_recaudador_numero_orden: red_recaudador_numero_orden) => red_recaudador_numero_orden.red)
    redId: Promise<string[]>;
}
