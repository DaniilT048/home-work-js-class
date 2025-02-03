'use strict';

export class Humans {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    person() {
        console.log (`Имя:${this.name} Пол:${this.gender}`)
    }
}


