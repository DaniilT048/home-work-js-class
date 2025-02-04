'use strict';

export class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    person() {
        console.log (`Имя:${this.name} Пол:${this.gender}`)
    }
}


