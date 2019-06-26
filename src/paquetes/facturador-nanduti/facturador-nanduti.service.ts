import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { facturador } from '../../entities/nandutiredpago/facturador';

@Injectable()
export class FacturadorNandutiService {
    constructor(@InjectRepository(facturador, 'nandutiredpago') private facturadorNandutiRepository: Repository<facturador>) { }

    async findAll(): Promise<facturador[]> {
        return await this.facturadorNandutiRepository.find({
            order: { etiquetaticket: "ASC" }
        })};
}
