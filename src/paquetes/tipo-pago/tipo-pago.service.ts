import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { tipopago } from '../../entities/nandutiredpago/tipopago';

@Injectable()
export class TipoPagoService {
    constructor(@InjectRepository(tipopago, 'nandutiredpago') private tipoPagoRepository: Repository<tipopago>) { }

    async findAll(): Promise<tipopago[]> {
        return await this.tipoPagoRepository.find({
            order: { descripcion: "ASC" }
        });
    }

    async findById(id: string ): Promise<tipopago> {
        return await this.tipoPagoRepository.findOne(id);
    }
}
