import {Injectable} from '@angular/core';

@Injectable()
export class LocalStoreService {
    setItem(key: string, value: any) {
        console.log('Set item: ', key, value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }
}
