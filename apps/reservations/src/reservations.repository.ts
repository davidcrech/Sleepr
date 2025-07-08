import { AbstractRepository } from '@app/common/database/abstract.repository';
import { Injectable } from '@nestjs/common';
import { ReservationDocument } from './models/reservation.schema';

@Injectable()
export class ReservationsRepository extends AbstractRepository<ReservationDocument> {
    
}
