import {Injectable} from '@angular/core';
import brokers from './mock-brokers';

@Injectable()
export class BrokerService {

    findAll() {
        return Promise.resolve(brokers);
    }

    findById(id) {
        console.log(brokers[id - 1].property)
        return Promise.resolve(brokers[id - 1]);
    }

}
