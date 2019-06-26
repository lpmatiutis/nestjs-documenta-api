import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { moneda } from '../../entities/nandutibase/moneda';

@Injectable()
export class MonedaNandutiService {
    constructor(@InjectRepository(moneda, 'nandutibase') private monedaRepository: Repository<moneda>) { }
    
    async findAll(): Promise<moneda[]> {
        return await this.monedaRepository.find({
            order: { descripcion: "ASC" }
        })};
}
