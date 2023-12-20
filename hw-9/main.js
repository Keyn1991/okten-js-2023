// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//
let form =  document.forms.f1

form.onsubmit = function (ev) {
    ev.preventDefault();
    let  username =  ev.target.username.value;
    let  surname =  this.surname.value;
    let  age =  this.age.value;

    document.querySelector('.result').innerHTML = `<h1>${username} <h2>${username} <h3>${username}</h3>`

}
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
function incrementCounter() {
    let counter = localStorage.getItem('pageCounter');

    counter = counter ? parseInt(counter) : 0;

    counter++;

    localStorage.setItem('pageCounter', counter);

    document.querySelector('.counter').textContent = counter;
}

incrementCounter();

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let currentDate = new Date();

let dateString = currentDate.toLocaleString();

localStorage.setItem("lastVisit", dateString);

let lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {

    let sessionInfoElement = document.querySelector(".session-info");
    sessionInfoElement.textContent = "Ви відвідали сторінку index.html останній раз: " + lastVisit;
} else {
    let sessionInfoElement = document.querySelector(".session-info");
    sessionInfoElement.textContent = "Ви ще не відвідували сторінку index.html";
}

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next

const objects = [];
for (let i = 1; i <= 100; i++) {
    objects.push({ id: i, name: `Name` });
}

let currentIndex = 0;
const objectsPerPage = 10;

function displayObjects() {
    const objectsList = document.getElementById("objects-list");
    objectsList.innerHTML = "";

    for (let i = currentIndex; i < currentIndex + objectsPerPage; i++) {
        if (i >= objects.length) {
            break;
        }

        const object = objects[i];
        const objectElement = document.createElement("div");
        objectElement.textContent = `${object.id}: ${object.name}`;
        objectsList.appendChild(objectElement);
    }
}


// при завантажені сторінки з'являються перші 10 об'єктів.
function nextObjects() {
    if (currentIndex + objectsPerPage < objects.length) {
        currentIndex += objectsPerPage;
        displayObjects();
    }
}
//     При натисканні next виводяться настпні 10 об'єктів
function prevObjects() {
    if (currentIndex - objectsPerPage >= 0) {
        currentIndex -= objectsPerPage;
        displayObjects();
    }
}
// При натисканні prev виводяться попередні 10 об'єктів
const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");

nextButton.addEventListener("click", nextObjects);
prevButton.addEventListener("click", prevObjects);

// Відображаємо перші 10 об'єктів при завантаженні сторінки
displayObjects();


//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const textElement = document.getElementById("text");
const hideButton = document.getElementById("hideButton");

hideButton.addEventListener("click", function() {
    textElement.style.display = "none";
});
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const ageForm = document.querySelector(".age-form");

ageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const ageInput = ageForm.querySelector("#ageInput");
    const age = parseInt(ageInput.value);

    if (age < 18) {
        alert("Ви молодше 18 років. Доступ заборонено.");
    } else {
        alert("Ви старше 18 років. Доступ дозволено.");
    }
});

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const tableForm = document.querySelector(".tableForm");
const rowCountInput = document.querySelector(".rowCount");
const cellCountInput = document.querySelector(".cellCount");
const cellContentInput = document.querySelector(".cellContent");
const tableContainer = document.querySelector(".tableContainer");

tableForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const rowCount = parseInt(rowCountInput.value);
    const cellCount = parseInt(cellCountInput.value);
    const cellContent = cellContentInput.value;

    let tableHTML = "<table style='border: 1px solid black;'>";

    for (let i = 0; i < rowCount; i++) {
        tableHTML += "<tr>";

        for (let j = 0; j < cellCount; j++) {
            tableHTML += `<td style='border: 1px solid black;'>${cellContent}</td>`;
        }

        tableHTML += "</tr>";
    }

    tableHTML += "</table>";
    tableContainer.innerHTML = tableHTML;
});

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const priceContainer = document.querySelector('.priceContainer')

setTimeout(function () {
   const currentPrice = parseInt(priceContainer.textContent);
   const newPrice = currentPrice +10;
   priceContainer.textContent = `${newPrice}грн`
}, 10000)

