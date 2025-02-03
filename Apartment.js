'use strict';

import {Humans} from "./Human.js";

export class Apartment {
    constructor(maxResidents){
        this.residents = [];
        this.maxResidents = maxResidents || 3;
    }

    addResident(item){
        if(this.residents.length < this.maxResidents) {
        this.residents.push(item);
        }
        else {
            console.log('Мест нет');
        }
    }
    residentList(){
        return this.residents.map(humans => humans.name);
    }

}

