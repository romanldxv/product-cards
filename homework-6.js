// 3) Создание объекта на основе моих данных

const person = {
  name: "Роман",
  surname: "Шаймарданов",
  gender: "М",
  age: 19,
  country: "Россия",
  city: "Челябинск",
  isMarried: false
}

console.log(person);

// 4) Создание объекта, который будет хранить данные об автомобиле

const car = {
  brand: "Totyota",
  model: "Hilux",
  year: 2019,
  color: "Синий",
  typeOfBox: "РКПП"
}

car.owner = person

console.log(car);

// 5) Создание функции, которая принимает объект и проверяет наличие свойства "максимальная скарость". Если его нет - добавляет

function checkMaxSpeed(car) {
  if (car.maxSpeed === undefined) {
    car.maxSpeed = 220;
  }
}

checkMaxSpeed(car);

// 6) Создание функции, принимающей объект и название свойства, которое нужно вывести и выводит его значение

function showObjectValue(object, property) {
  console.log(object[property]);
}

showObjectValue(person, "gender");

// 7) Создание массива, содержащий названия продуктов

const products = ["Хлеб", "Молоко", "Яйца", "Курица", "Морковь", "Лук"];

console.log(products);

// 8) Создание массива объектов. После добавить новый объект в конец списка

let languages = [
  {
    name: "JavaScript",
    year: 1995,
    author: "Брендан Эйх",
    extensions: [".js", ".mjs", ".cjs"],
    website: "https://ecma-international.org/publications-and-standards/standards/ecma-262"
  },
  {
    name: "Kotlin",
    year: 2011,
    author: "JetBrains",
    extensions: [".kt", ".kts"],
    website: "https://kotlinlang.org"
  },
  {
    name: "Python",
    year: 1991,
    author: "Гвидо ван Россум",
    extensions: [".py", ".pyc", ".pyo"],
    website: "https://python.org"
  }
];

languages.push(
  {
    name: "PHP",
    year: 1995,
    author: "Расмус Лердорф",
    extensions: [".php", ".phar"],
    website: "https://php.net"
  }
);

console.log(languages);

// 9) Создание массива из объектов одной вселенной. Объединить оба массива

const cFamily = [
  {
    name: "C++",
    year: 1983,
    author: "Бьёрн Страуструп",
    extensions: [".cc", ".cpp", ".cxx"],
    website: "https://isocpp.org"
  },
  {
    name: "C#",
    year: 2001,
    author: "Андерс Хейлсберг",
    extensions: [".cs", ".csx"],
    website: "https://docs.microsoft.com/ru-ru/dotnet/csharp"
  }  
];

languages = [...languages, ...cFamily];

console.log(languages);

// 10) Применить метод forEach с добавлением нового свойства по условию

languages.forEach(language => {
  (language.year < 2000) ? language.isOld = true : language.isOld = false;
})

console.log(languages);