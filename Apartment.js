'use strict';

import {Humans} from "./Human.js";

export class Apartment {
    constructor(){
        this.occupant = [];
    }

    addOccupant(item){
        if(this.occupant.length <= 2){
        this.occupant.push(item);
        }
        else {
            console.log('Мест нет');
        }
    }
    apartmentList(){
        return this.occupant.map(humans => humans.name);
    }

}

