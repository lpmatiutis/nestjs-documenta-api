import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {estados_practi_restri} from "./estados_practi_restri";


@Entity("practi_restri",{schema:"redcobrosjp" } )
export class practi_restri extends BaseEntity {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"cod_practi_restri"
        })
    cod_practi_restri:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_recaudador"
        })
    id_recaudador:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"monto"
        })
    monto:string | null;
        

   
    @ManyToOne(type=>estados_practi_restri, estados_practi_restri=>estados_practi_restri.practiRestris,{  })
    @JoinColumn({ name:'cod_estado'})
    codEstado:Promise<estados_practi_restri | null>;

    @RelationId((practi_restri: practi_restri) => practi_restri.codEstado)
    codEstadoId: Promise<string[]>;
}
