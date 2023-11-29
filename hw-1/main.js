// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a, b) {
    const c = a * b;
    console.log(c)
}
rectangle(7, 8)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function calculateCircleArea(radius) {
    let s = 3.14 * radius * radius;
    console.log(s);
    return s;
}
calculateCircleArea(10)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(r, h) {
    let s =  Math.PI * r * (r + h);
    console.log(s)
    return s;
}

cylinderArea(5, 10)

// - створити функцію яка приймає масив та виводить кожен його елемент

function usersOutput(arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }

}
usersOutput( [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function fooText(p, text) {
    document.write(`<p>${text}</p>`)
}
fooText('p', 'Hello World')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function fooUl(ul, li, text) {
    document.write(`
    <ul>
     <li>${text}</li>       
     <li>${text}</li>       
     <li>${text}</li>       
    </ul>
    `)
}
fooUl('ul', 'li', 'product')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function fooUl2(text, elementLi) {
    document.write(`<ul>`)
    for (let i = 0; i < elementLi; i++) {
        document.write(`<li>${text}</li>`)

    }
    document.write(`</ul>`)
}
fooUl2('product', '3')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function fooList(arr1) {
    document.write(`<ul>`)
    for (const arr1Element of arr1) {
        document.write(`<li>${arr1Element}</li>`)
    }

    document.write(`</ul>`)
}
fooList([2,3,11, 'hello', 'okten', 'name', 'lastName', 'age', true, false])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const usersR = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Eva', age: 28 },
];

function fooUserR(usersR) {
    for (const usersRElement of usersR) {
        document.write(`<div>${usersRElement.id}, ${usersRElement.name}, ${usersRElement.age }</div>`)
    }
}

fooUserR(usersR)

// - створити функцію яка повертає найменьше число з масиву

const arrayNum = [23, 56, 12, 45, 89];
function fooMinNum(arrayNum) {
    let min = arrayNum[0];
    for (let number of arrayNum) {
        if (min > number) {
            min = number;
        }
    }
    return min;
}
console.log(fooMinNum(arrayNum))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arrayNum) {
    let total = 0;
    for (const number of arrayNum) {
        total += number;
    }
    return total
}

console.log(sum(arrayNum));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const array = [11, 22, 33, 44];

function swap(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        return arr;
    }
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

swap(array, 0, 1);
console.log(array);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            const exchangedSum = sumUAH / currency.value;
            return exchangedSum;
        }
    }

}

const result = exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
console.log(result);



