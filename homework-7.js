import { comments } from "./comments.js";

// 2. Фильтрация массива чисел, чтобы новый массив начинался с 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFromFive = numbers.filter(number => number > 4);

console.log(numbersFromFive);

// 3. Проверка того, что в массиве есть какая-то сущность

const hobbies = ["Плавание", "Арабский язык", "Программирование"];

console.log(hobbies.includes("Программирование"));

// 4. Создать функцию, которая будет переворачивать переданный массив

const reverseArray = array => array.reverse();

console.log(reverseArray(numbers));
console.log(reverseArray(hobbies));

// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const sortedCommentsByMail = comments.filter(comment => comment.email.includes(".com"));

console.log(sortedCommentsByMail);

// 8. Перебрать массив таким образом, чтобы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const sortedCommentsById = comments.map(comment => ({ ...comment, postId: comment.id <= 5 ? 2 : 1 }));

console.log(sortedCommentsById);

// 9. Перебрать массив, что бы объекты состояли только из айди и имени

const commentsOnlyIdWithName = comments.map(comment => ({ id: comment.id, name: comment.name }));

console.log(commentsOnlyIdWithName);

// 10. Добавить объектам свойство isInvalid и проверить: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const newComments = comments.map(comment => ({...comment, isInvalid: comment.body.length > 180}));

console.log(newComments);

// 11. Используя reduce(), вывести массив почт и провернуть тоже самое с помощью метода map

const userEmailsByReduce = comments.reduce((email, comment) => [...email, comment.email], [])

console.log(userEmailsByReduce)

const userEmailsByMap = comments.map(comment => comment.email)

console.log(userEmailsByMap)

// 12. Перебрав массив с задания №11, привести его к строке (toString(), join())

console.log(userEmailsByReduce.toString())
console.log(userEmailsByMap.join())