// - Знайти та вивести довижину настипних стрінгових значень

// const str = 'hello world'
// const str2 = 'lorem ipsum'
// const str3 = 'javascript is cool'
//
// console.log(str.length);
// console.log(str2.length);
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log(str.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення

const text =" 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'";

console.log(text.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
//
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

    let str = 'Ревуть воли як ясла повні';

// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const stringToarray = (str) => {
    const wordsArray = str.split(' ');
    return wordsArray;
}
const arr = stringToarray(str);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const num = [10,8,-7,55,987,-1011,0,1050,0];

const numToStr = num.map((value, index) => String(value));

console.log(numToStr);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
const sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    } else {
        return nums;
    }
};

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filteredCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filteredCourses)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let transformedCourses = filteredCourses.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));
console.log(transformedCourses)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let arrCards = [

    {card: 'clubs', value: 6, color:'black'},
    {card: 'clubs', value: 7, color:'black'},
    {card: 'clubs', value: 8, color:'black'},
    {card: 'clubs', value: 9, color:'black'},
    {card: 'clubs', value: 10, color:'black'},
    {card: 'clubs', value: 'jack', color:'black'},
    {card: 'clubs', value: 'queen', color:'black'},
    {card: 'clubs', value: 'king', color:'black'},
    {card: 'clubs', value: 'ace', color:'black'},

    {card: 'spade', value: 6, color:'black'},
    {card: 'spade', value: 7, color:'black'},
    {card: 'spade', value: 8, color:'black'},
    {card: 'spade', value: 9, color:'black'},
    {card: 'spade', value: 10, color:'black'},
    {card: 'spade', value: 'jack', color:'black'},
    {card: 'spade', value: 'queen', color:'black'},
    {card: 'spade', value: 'king', color:'black'},
    {card: 'spade', value: 'ace', color:'black'},

    {card: 'diamond', value: 6, color:'red'},
    {card: 'diamond', value: 7, color:'red'},
    {card: 'diamond', value: 8, color:'red'},
    {card: 'diamond', value: 9, color:'red'},
    {card: 'diamond', value: 10, color:'red'},
    {card: 'diamond', value: 'jack', color:'red'},
    {card: 'diamond', value: 'queen', color:'red'},
    {card: 'diamond', value: 'king', color:'red'},
    {card: 'diamond', value: 'ace', color:'red'},

    {card: 'heart', value: 6, color:'red'},
    {card: 'heart', value: 7, color:'red'},
    {card: 'heart', value: 8, color:'red'},
    {card: 'heart', value: 9, color:'red'},
    {card: 'heart', value: 10, color:'red'},
    {card: 'heart', value: 'jack', color:'red'},
    {card: 'heart', value: 'queen', color:'red'},
    {card: 'heart', value: 'king', color:'red'},
    {card: 'heart', value: 'ace', color:'red'},
];

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
 let reduce = arrCards.reduce((accumulator, card) => {
    if (card.card === 'spade') {
        accumulator.spade.push(card);
    }else if (card.card === 'diamond') {
        accumulator.diamond.push(card);
    } else if (card.card === 'heart') {
        accumulator.heart.push(card)
    } else if (card.card === 'clubs') {
        accumulator.clubs.push(card)
    }
    return accumulator;
}, {spade:[], diamond:[], heart:[], clubs:[]});
console.log(reduce)

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass

const  objectsWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(objectsWithSass)

// --написати пошук всіх об'єктів, в який в modules є docker

const objectsWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(objectsWithDocker)