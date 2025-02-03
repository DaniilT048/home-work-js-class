'use strict';

import {Humans} from "./Human.js";

export class Apartment {
    constructor(){
        this.occupant = [];
    }

    addOccupant(item){
        this.occupant.push(item);

    }
    apartmentList(){
        return this.occupant;
    }

}

