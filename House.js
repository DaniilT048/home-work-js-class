'use strict';

// import {Apartment} from "./Apartment";
// import {Humans} from "./Human";
//
 export class House {
      constructor() {
          this.apartment = []
      }
      addApartmentInHouse(item) {
          if(this.apartment.length <= 9){
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
