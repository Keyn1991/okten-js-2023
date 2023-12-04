// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const areaRectangle = (a, b) => a * b

console.log(areaRectangle(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const calcCircleArea = (radius) => Math.round(Math.PI * radius ** 2);

console.log(calcCircleArea(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cylinderArea = (r, h) => {
    let s = Math.round(Math.PI * r * (r + h));
    console.log(s);
}
cylinderArea(3, 8)

// - створити функцію яка приймає масив та виводить кожен його елемент

const fooArr = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
fooArr(['adad', 'wrer', 'hgjfgj', 15, null, undefined])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const fooText = (text) => {
    document.write(`<p>${text}</p>`)
}
fooText('Hello World')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const fooUl = (ul, li, text) => {
    document.write('<ul>')

    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)

    document.write('</ul>')
}
fooUl('ul', 'li', 'World')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const fooUlLi = (text, elements) => {
    document.write('<ul>')
    for (let i = 0; i < elements; i++) {
        document.write(`<li>${text}</li>`)

    }
    document.write('</ul>')
}
fooUlLi('product', '3')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const fooList = (arr1) => {
    document.write(`<ul>`)
    for (const arr1Element of arr1) {
        document.write(`<li>${arr1Element}</li>`)
    }
    document.write(`</ul>`)
}
fooList([123, 556, 212, 'Hello', 'World', true, false], 2)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const usersR = [
    {id: 1, name: 'John', age: 30},
    {id: 2, name: 'Alice', age: 25},
    {id: 3, name: 'Bob', age: 35},
    {id: 4, name: 'Eva', age: 28},
];

const fooUsers = (usersR) => {
    for (const usersRElement of usersR) {
        document.write(`<div>${usersRElement.id} ${usersRElement.name} ${usersRElement.age}</div>`)
    }
}
fooUsers(usersR)

// - створити функцію яка повертає найменьше число з масиву
const arrayNum = [3, 7, 5, 4, 2];
const fooMinNum = (arrayNum) => {
    let min = arrayNum[0];
    for (let number of arrayNum) {
        if (min > number) {
            min = number;
        }
    }
    return min;
};
console.log(fooMinNum(arrayNum))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const arrayNum2 = [1, 2, 10];
const sum = arrayNum2 => {
    let total = 0;
    for (const number of arrayNum2) {
        total += number;
    }
    return total;
};

console.log(sum(arrayNum2));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const array = [11, 22, 33, 44];

const swap = (arr, index1, index2) => {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        return arr;
    }
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};

swap(array, 0, 1);
console.log(array);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currency  of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            const exchangedSum = sumUAH / currency.value;
            return exchangedSum
        }
    }
}

const result = exchange(100, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
console.log(result);