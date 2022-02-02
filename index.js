// конструктор
function Car(manufacturer, model, color, releaseYear, fuelConsumption, volume) {
    this.drive = function() {
        return 'Машина, цвет которой - ' + this.color + ', ее производитель - ' + this.manufacturer + ', ' + this.releaseYear + ' года выпуска.';
    }

    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.releaseYear = releaseYear;
    this.fuelConsumption = fuelConsumption;
    this.volume = volume;

    return this.Car; // решил не забыть про эту строчку
}

// создаю три объекта
const toyota = new Car('Toyota', 'базовая', 'желтый', '1995', 15, 30);
const bmw = new Car('BMW', 'дешевая', 'синий', '2002', 30, 15);
const lexus = new Car('Lexus', 'топовая', 'красный', '2004', 25, 65);

// тест
console.log(toyota);
console.log(toyota.drive());
console.log(bmw);
console.log(bmw.drive());
console.log(lexus);
console.log(lexus.drive());

// добавлю Тойоте еще одно свойство
toyota.testProperty = 123;
// удаляю это свойство
delete toyota.testProperty;