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
}
