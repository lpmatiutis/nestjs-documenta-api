import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { tipoplantillaservicio } from '../../entities/nandutiredpago/tipoplantillaservicio';

@Injectable()
export class PlantillaServicioService {
    constructor(@InjectRepository(tipoplantillaservicio, 'nandutiredpago') private plantillaRepository: Repository<tipoplantillaservicio>) { }

    async findAll(): Promise<tipoplantillaservicio[]> {
        return await this.plantillaRepository.find()};
}
