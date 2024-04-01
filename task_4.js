// # Завдання 4

// Створіть об'єкт "користувач" з властивостями "ім'я" та "баланс". Додайте до
// об'єкту метод "додати гроші", який збільшує баланс користувача на вказану суму.
// Додайте до об'єкту метод "balanceInfo", який виводить поточний баланс
// користувача в консоль.

// Створіть масив "users", який містить кілька об'єктів типу "user". Використовуючи
// метод "forEach()", викличте метод "addMoney" на кожному елементі масиву "users".
// Використовуючи метод "filter()", створіть новий масив, який міститиме тільки ті
// об'єкти типу "user", у яких баланс більший за вказану суму. Використовуючи метод
// "map()", створіть новий масив, який містить баланс кожного користувача з масиву
// "users". Виведіть цей масив в консоль.

// Використайте метод "call()", щоб викликати метод "balanceInfo" на конкретному
// об'єкті "user". Перевірте, що в контексті методу "balanceInfo" значення "this"
// вказує на конкретний об'єкт "user".

// ```js
// const users = [
//     { name: 'Alice', balance: 500 },
//     { name: 'Bob', balance: 200 },
//     { name: 'Charlie', balance: 1000 },
// ];
// ```

const user = {
    name: 'Alice',
    balance: 500,
    addMoney(amount) {
        this.balance += amount;
    },
    balanceInfo() {
        console.log(`Current balance for ${this.name}: ${this.balance}`);
    }
};

const users = [
    { name: 'Alice', balance: 500 },
    { name: 'Bob', balance: 200 },
    { name: 'Charlie', balance: 1000 },
];

users.forEach(user => {
    user.addMoney = userAddMoney;
    user.balanceInfo = userBalanceInfo;
});

function userAddMoney(amount) {
    this.balance += amount;
}

function userBalanceInfo() {
    console.log(`Current balance for ${this.name}: ${this.balance}`);
}

const balanceGreaterThan = 400;

const richUsers = users.filter(user => user.balance > balanceGreaterThan);
console.log(richUsers);

const balances = users.map(user => user.balance);
console.log(balances);

users.forEach(user => {
    user.balanceInfo.call(user);
});
