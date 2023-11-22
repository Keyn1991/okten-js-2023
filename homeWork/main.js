// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const arr1 = ['Dmytro','Potapchuk','JS','React', 'Node.js', 1990, 11, 0.7, true, false];
console.log(arr1);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let  book = {
    title: 'Thinking, Fast and Slow',
    pageCount: 672,
    genre: 'psychology'
};

let book2 = {
    title: 'Clean Code',
    pageCount: 464,
    genre: 'Programming'
};

let book3 = {
    title: 'The Pragmatic Programmer',
    pageCount: 352 ,
    genre: 'Programming'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'Thinking, Fast and Slow',
    pageCount: 672,
    genre: 'psychology',
    authors: [
        { name: 'Daniel Kahneman', age: 89 }
    ]
};

let book5 =  {
    title: 'Clean Code',
    pageCount: 464,
    genre: 'Programming',
    authors: [
        {
            name: 'Robert C. Martin', age: 71
        }
    ]
};

let book6 = {
    title: 'The Pragmatic Programmer',
    pageCount: 352 ,
    genre: 'Programming',
    authors: [
        {
            name: 'Thomas and Andy Hunt', age: 58
        }
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arrUsers = [
    {name: 'user1', username: 'userName1', password: 123456},
    {name: 'user2', username: 'userName2', password: 123456},
    {name: 'user3', username: 'userName3', password: 123456},
    {name: 'user4', username: 'userName4', password: 123456},
    {name: 'user5', username: 'userName5', password: 123456},
    {name: 'user6', username: 'userName6', password: 123456},
    {name: 'user7', username: 'userName7', password: 123456},
    {name: 'user8', username: 'userName8', password: 123456},
    {name: 'user9', username: 'userName9', password: 123456},
    {name: 'user',  username: 'userName0', password: 123453},
];

console.log(arrUsers[0].password);
console.log(arrUsers[1].password);
console.log(arrUsers[2].password);
console.log(arrUsers[3].password);
console.log(arrUsers[4].password);
console.log(arrUsers[5].password);
console.log(arrUsers[6].password);
console.log(arrUsers[7].password);
console.log(arrUsers[8].password);
console.log(arrUsers[9].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

const num = -3;

if (num !== 0) {
    console.log('Вірно');
}else {
    console.log('не вірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

const time = 15;

    if (time > 0 && time <= 15){
        console.log('в першу');
    }else if (time > 15 && time <= 30) {
        console.log('в другу');
    }else if (time > 30 && time <= 45) {
        console.log('в третю');
    }else if (time > 45 && time <= 59) {
        console.log('в четверту');
    };


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

const day = 22;

if (day <= 10){
    console.log('у першу');
}else if (day > 10 && day <= 20){
    console.log('у другу');
}else if (day > 20 && num <= 31){
    console.log('у третю');
};


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

const schedule = prompt('enter dey');

switch (schedule) {
    case '1':
        console.log('Sunday');
     break;
    case '2':
        console.log('Monday');
     break;
    case '3':
        console.log('Tuesday');
        break;
    case '4':
        console.log('Wednesday');
        break;
    case '5':
        console.log('Thursday');
        break;
    case '6':
        console.log('Friday');
        break;
    case '7':
        console.log('Saturday');
        break;
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let numUser1 = +prompt('Введіть перше число:');
let numUser2 = +prompt('Введіть друге число:');

if (numUser1 > numUser2) {
    alert(numUser1);
}else if (numUser2 > numUser1){
    alert(numUser2)
}else if (numUser1 === numUser2){
    alert('Числа рівні');
}else {
    alert('потрібно вводити лише числа');
};


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x;

x = undefined || "default";

console.log(x);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}else {
    console.log('вчись далі');
};

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}else {
    console.log('вчись далі');
};

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}else {
    console.log('вчись далі');
};

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}else {
    console.log('вчись далі');
};

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}else {
    console.log('вчись далі');
};

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}else {
    console.log('вчись далі');
};