import { Injectable, Inject, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { serviciooperacion } from '../../entities/nandutiredpago/serviciooperacion';
//import { redoperacion } from '../../entities/nandutiredpago/redoperacion';
import { servicio } from '../../entities/nandutiredpago/servicio';
import { tipopago } from '../../entities/nandutiredpago/tipopago';
//import { moneda } from 'src/entities/nandutibase/moneda';
//import { facturador } from 'src/entities/nandutiredpago/facturador';
import { red } from 'src/entities/nandutiredpago/red';
@Injectable()
export class ServicioOperacionService {
    constructor(@InjectRepository(serviciooperacion, 'nandutiredpago') private servicioOperacionRepository: Repository<serviciooperacion>) { }

    async findAll(): Promise<serviciooperacion[]> {
        return await this.servicioOperacionRepository.find(
            {take: 10}
        );
    }

    async findAllBy(/*servicio: servicio*/): Promise<serviciooperacion[]> {
        return await this.servicioOperacionRepository
        .createQueryBuilder("s")
        //.innerJoinAndSelect(tipopago, "t", "s.idtipopago=t.idtipopago")
        .innerJoinAndSelect("s.idtipopago", "t")
        .innerJoinAndSelect("s.idservicio", "se")
        .leftJoinAndSelect("s.idpersona", "r")
        .innerJoinAndSelect("s.idmoneda", "m")
        //.innerJoinAndSelect(facturador, "f", "se.idfacturadordocumenta=f.idfacturadordocumenta")
        //.innerJoin("se.idfacturadordocumenta", "f", "se.idfacturadordocumenta=f.idfacturadordocumenta")
        //.innerJoin(redoperacion, "redoperacion")
        .where("s.idclienteservicio = :idcliente", {idcliente: '8205'}) //{idcliente: servicio.idcliente})
        .andWhere("s.idpersonaservicio = :idpersona", {idpersona: '4953853'}) //{idpersona: servicio.idpersona})
        .andWhere("s.idservicio = :idservicio", {idservicio: '662'}) //{idservicio: servicio.idservicio})
        .orderBy("s.idserviciooperacion")
        //.getSql()
        //.limit(5)
        .getMany();
    }

    async findAllJoin(servicio2: string, facturador2: string): Promise<serviciooperacion[]> {
        if(facturador2 ===null){
            console.log('object');
            facturador2 = '';
        }
        return await this.servicioOperacionRepository
        .createQueryBuilder("s")
        //.select("s.idserviciooperacion as id, r.descripcion as persona, t.descripcion as tipo, se.etiquetaticket as servicio, f.etiquetaticket as facturador, se.idservicio as idServicio, s.activo as estado, m.descripcion as moneda")
        //.select("s")
        //.from(serviciooperacion, "s")
        .innerJoin(tipopago, "t", "s.idtipopago=t.idtipopago")
        .innerJoin(servicio, "se", "s.idservicio=se.idservicio")
        //.innerJoin("s.idservicio", "se", "s.idservicio=se.idservicio")
        // .innerJoin(facturador, "f", "se.idfacturadordocumenta=f.idfacturadordocumenta")
        //.innerJoin("se.idfacturadordocumenta", "f", "se.idfacturadordocumenta=f.idfacturadordocumenta")
        //.innerJoin("se.idcliente", "f")
        .innerJoin(red, "r", "s.idpersona=r.idpersona")
        //.innerJoin(moneda, "m", "s.idmoneda=m.idmoneda")
        .innerJoin("s.idmoneda", "m")
        //.where("se.descripcion ilike :servDescripcion", {servDescripcion: '%' + servicio2 + '%'})
        //.andWhere("f.etiquetaticket ilike :factDescripcion", {factDescripcion: '%' + facturador2 + '%'})
        .where("s.idmoneda = m.idmoneda")
        //.groupBy("s.idserviciooperacion, r.descripcion, t.descripcion, se.etiquetaticket, f.etiquetaticket, se.idservicio, s.activo, m.descripcion")
        //.orderBy("s.idserviciooperacion")
        //.limit(10)
        //.getSql()
        //.getSql()
        //.getRawMany()
        .getMany();
    }

    async create(serviciooperacion: serviciooperacion): Promise<serviciooperacion>{
        console.log('servicio operacion: ' + JSON.stringify(serviciooperacion));
        return await this.servicioOperacionRepository.save(serviciooperacion);
    }

    async findAllJoinJava(servicio: servicio): Promise<serviciooperacion[]> {
        
        return await this.servicioOperacionRepository
        .createQueryBuilder("s")
        .innerJoin("redoperacion", "ro", "on s.idpersona = ro.idpersona on s.idpersona = ro.idpersona")
        //.innerJoin("s.idpersona = ro.idpersona on s.idpersona = ro.idpersona")
        //.innerJoin("s.idcliente = ro.idcliente", "")
        //.innerJoin("s.idtipopago = ro.idtipopago", "")
        //.innerJoin("s.idmoneda = ro.idmoneda", "")
        .where("s.idclienteservicio = :idclienteservicio", {idclienteservicio: servicio.idcliente})
        .andWhere("s.idpersonaservicio = :idpersonaservicio", {idpersonaservicio: servicio.idpersona})
        .andWhere("s.idservicio = :idservicio", {idservicio: servicio.idservicio})
        .orderBy("s.idserviciooperacion")
        .getMany();
    }
        
    /*
    public List<Serviciooperacion> findServicioOperationByServicio(Servicio servicio) throws NandutiEJBException {
        try {
            StringBuilder sb = new StringBuilder();

            sb.append("SELECT s.* ");
            sb.append("FROM reddepago.serviciooperacion s ");
            sb.append("join reddepago.redoperacion ro on ");
            sb.append("s.idpersona = ro.idpersona and ");
            sb.append("s.idcliente = ro.idcliente and ");
            sb.append("s.idtipopago = ro.idtipopago and ");
            sb.append("s.idmoneda = ro.idmoneda ");
            sb.append("WHERE s.idclienteservicio =  ?1 ");
            sb.append("AND s.idpersonaservicio =  ?2 ");
            sb.append("AND s.idservicio = ?3  ");
            sb.append("ORDER BY s.idserviciooperacion ");

            Query q = getEntityManager().createNativeQuery(sb.toString(), Serviciooperacion.class);
            q.setParameter(1, servicio.getServicioPK().getIdcliente());
            q.setParameter(2, servicio.getServicioPK().getIdpersona());
            q.setParameter(3, servicio.getServicioPK().getIdservicio());

            return q.getResultList();
        } catch (Exception ex) {
            throw new NandutiEJBException("No se pudo listar todos los servicios de un facturador.", ex);
        }
    }
    */
}
