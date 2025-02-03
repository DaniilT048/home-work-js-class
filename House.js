'use strict';


import {Apartment} from "./Apartment.js";

export class House {
      constructor(maxApartm) {
          this.apartment = []
          this.maxApartm = maxApartm || 5;
      }
      addApartmentInHouse(item) {
          if(this.apartment.length < this.maxApartm) {
              this.apartment.push(item);
          }
          else{
              console.log('Больше квартир нет')
          }
      }
     apartmentList(){
        return this.apartment;
     }
 }
