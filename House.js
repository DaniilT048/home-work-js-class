'use strict';


import {Apartment} from "./Apartment.js";

export class House {
      constructor(maxApartm) {
          this.apartments = []
          this.maxApartm = maxApartm || 5;
      }
      addApartmentInHouse(item) {
          if (!(item instanceof Apartment)) {
              console.log("Ошибка. Это не квартира");
              return;
          }

          if(this.apartments.length < this.maxApartm) {
              this.apartments.push(item);
          }
          else{
              console.log('Больше квартир нет')
          }
      }
 }
