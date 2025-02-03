'use strict';


import{Humans}from'./Human.js'
import {Apartment} from "./Apartment.js"
import{House}from'./House.js'



const human1 = new Humans('Евгений', 'Мужчина' );
human1.person();
const human2 = new Humans('Елена', 'Женщина' );
human2.person();
const human3 = new Humans('София', 'Женщина' );
human3.person();
const human4 = new Humans('Николай', 'Мужчина' );
human4.person();

const apartments = new Apartment()
apartments.addOccupant(human1)
apartments.addOccupant(human2)
apartments.addOccupant(human3)

const apartments2 = new Apartment()
apartments2.addOccupant(human4)
console.log(apartments.occupantList());

const BigHouse = new House()
BigHouse.addApartmentInHouse(apartments)
BigHouse.addApartmentInHouse(apartments2)
console.log(BigHouse.apartmentList())
/*
#1
Усі класи розкласти по своїм файлам і імпортувати! Наприклад, клас Human має бути в окремому файлі Human.js

a) Створити клас Людина.
  Властивості:
    імʼя;
    стать.
  Методи:
    конструктор, який приймає два параметри: імʼя та стать.



b) Створити клас Квартира.
  Властивості:
    конструктор не потрібен;
    масив жителів, який при створенні пустий.
  Методи:
    додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

c) Створити клас Будинок.

  Властивості:
    масив квартир, який при створенні пустий;
    максимальна кількість квартир.
  Методи:
    конструктор, який приймає один параметр: максимальну кількість квартир;
    додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

d) В якості демонстраціїї створити:
  декілька екземплярів класу Людина;
  декілька екземплярів класу Квартира;
  додадити екземпляри класу Людина до екземплярів класу Квартира;
  екземпляр класу Будинок;
  додадити екземпляри класу Квартира до екземплярів класу Будинок.
*/



