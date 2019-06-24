import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { facturador } from '../../entities/documentaJP/facturador';

@Injectable()
export class FacturadorService {
    constructor(@InjectRepository(facturador) private facturadorRepository: Repository<facturador>) { }

    async findAll(): Promise<facturador[]> {
        console.log('esto' + this.getLastId());
        return await this.facturadorRepository.find({
                order: {descripcion: "ASC"}
            },
        )};

    async findById(id: string): Promise<facturador> {
        return await this.facturadorRepository.findOne(id);
    }

    async create(facturador: facturador): Promise<facturador> {
        console.log('facturador aqui: ' + JSON.stringify(facturador));
        return await this.facturadorRepository.save(facturador);
    }

    async update(facturador: facturador): Promise<UpdateResult> {
        return await this.facturadorRepository.update(facturador.id_facturador
            , facturador);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.facturadorRepository.delete(id);
    }

    async getLastId(){
        const query= this.facturadorRepository.createQueryBuilder("facturador")
        .select("MAX(id_facturador)", "max");
        //.from(entidad, "entidad")
        //.groupBy("id_localidad")
        //.getOne();
        return query.getRawOne();
    
}

}
