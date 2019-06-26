import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { servicio } from '../../entities/nandutiredpago/servicio';

@Injectable()
export class ServicioService {
    constructor(@InjectRepository(servicio, 'nandutiredpago') private servicioRepository: Repository<servicio>) {}
        
        async findAll(): Promise<servicio[]> {
            return await this.servicioRepository.find({
                order: { descripcion: "ASC" }
            });
        }
    
        async findById(id: string): Promise<servicio> {
            return await this.servicioRepository
            .createQueryBuilder()
            .where("idservicio = :idservicio", {idservicio: id})
            .getOne();
        }

}
