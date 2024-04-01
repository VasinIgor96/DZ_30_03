// # Завдання 2

// Створіть об'єкт `car`, який містить властивості марка, модель, рік випуску,
// швидкість.

// Створіть ще один обʼєкт `location`, який містить властивість `city` та
// `distance`

// Створіть метод обʼєкта car `showInfo()`, який виводить інформацію про автомобіль
// на екран у форматі
// `Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; `.

// Створіть функцію `showTime()`, яка буде вираховувати за який час автомобіль
// доїде до міста `city` та виводити в консоль повідомлення в форматі
// `Автомобіль {brand}, марки {model} дістанеться міста {city} за {time}`

// Використовуйте обєднання обʼєктів, метод forEach та ключове слово this для
// доступу до властивостей об'єкту.

const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2018,
    speed: 120,
    location: { city: 'Kyiv', distance: 300 },
    showInfo() {
      console.log(`Марка: ${this.brand}; Модель: ${this.model}; Рік випуску: ${this.year};`);
    },
    showTime() {
      const { city, distance } = this.location;
      const time = distance / this.speed;
      console.log(`Автомобіль ${this.brand}, моделі ${this.model} дістанеться міста ${city} за ${time} годин`);
    }
  };
  
  car.showInfo();
  car.showTime();
  
  
  
  