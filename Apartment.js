'use strict';

import {Human} from "./Human.js";

export class Apartment {
    constructor(maxResidents){
        this.residents = [];
        this.maxResidents = maxResidents || 3;
    }

    addResident(item){
        if(!(item instanceof Human)) {
            console.log('Ошибка. Вы не человек');
            return;
        }

        if(this.residents.length < this.maxResidents) {
        this.residents.push(item);
        }
        else {
            console.log('Мест нет');
        }
    }

    getResidentsNames(){
        return this.residents.map(humans => humans.name);
    }

}

