// # Завдання 3

// Створіть масив об'єктів "студентів", який містить властивості "ім'я", "вік" та
// "рейтинг". Додайте до масиву метод "вітатися", який буде повертати рядок з
// привітанням зі зазначенням імені студента.

// Використовуючи метод "map()", створіть новий масив, який містить привітання з
// кожним студентом з масиву "студентів". Використовуючи метод "filter()", створіть
// новий масив, який містить тільки ті об'єкти типу "студент", які мають рейтинг
// вище заданого значення.

// Створіть функцію "addRating", яка приймає один аргумент - кількість балів, на
// яку потрібно збільшити рейтинг студента. Викличте функцію "addRating" на кожному
// елементі масиву "студентів". Перевірте, що в контексті функції "addRating"
// значення "this" вказує на конкретний об'єкт "студент". Виведіть новий масив зі
// зміненими рейтингами в консоль.

const students = [
    { name: 'Alex', age: 20, rating: 85 },
    { name: 'Bob', age: 22, rating: 75 },
    { name: 'Alisa', age: 21, rating: 90 },
];

students.forEach(student => {
    student.greet = function() {
        return `Привіт, я ${this.name}!`;
    };
});

const greetings = students.map(student => student.greet());
console.log(greetings);

const highRatedStudents = students.filter(student => student.rating > 80);
console.log(highRatedStudents);

function addRating(points) {
    this.rating += points;
}

students.forEach(student => addRating.call(student, 5));
console.log(students);
