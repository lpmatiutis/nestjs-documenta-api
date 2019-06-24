import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { parametro_servicio } from '../../entities/documentaJP/parametro_servicio';

@Injectable()
export class ParametroServicioService {
    constructor(@InjectRepository(parametro_servicio) private parametroRepository: Repository<parametro_servicio>) { }

    async findAll(): Promise<parametro_servicio[]> {
        return await this.parametroRepository.find()};

    async findById(id: string): Promise<parametro_servicio> {
        return await this.parametroRepository.findOne(id);
    }

    async create(parametro_servicio: parametro_servicio): Promise<parametro_servicio> {
        console.log('entidad aqui: ' + JSON.stringify(parametro_servicio));
        return await this.parametroRepository.save(parametro_servicio);
    }

    async update(parametro_servicio: parametro_servicio): Promise<parametro_servicio> {
        return await this.parametroRepository.save(parametro_servicio);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.parametroRepository.delete(id);
    }
}
