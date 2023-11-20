// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

const hs = 'hello';
const hso = 'owu';
const hsc = 'com';
const hsu = 'ua';

const no = 1;
const nt = 10;
const nn = -999;
const not = 123;
const PI = 3.14;
const nts = 2.7;
const ns = 16;

const bool1 = true;
const bool2 = false;

console.log(hs, hso, hsc, hsu, no, nt, nn, not, PI, nts, ns, bool1, bool2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

const firstName = 'Potapchuk';
const middleName = "Dmytro";
const lastName ='Volodymyrovych';

// const person = firstName +' '+ middleName + ' ' + lastName  \ інтерполяція

const person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100; let b = '100'; let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt("Введіть ваше ім'я:");
let patronymic = prompt("Введіть ваше по-батькові:");
let age = prompt("Введіть ваш вік:");

console.log(`ім'я: ${name}`);
console.log(`по-батькові: ${patronymic}`);
console.log(`Вік: ${age}`);