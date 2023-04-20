let password = 'пароль';
let vvod = prompt ('Введите пароль');
if (vvod === 'многослов') {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

let c1 = 0;
if (c1 > 0 && c1 < 10) {
    alert('Верно');
} else {
    alert('Неверно');
} 
let c2 = 10;
if (c2 > 0 && c2 < 10) {
    alert('Верно');
} else {
    alert('Неверно');
} 
let c3 = -3;
if (c3 > 0 && c3 < 10) {
    alert('Верно');
} else {
    alert('Неверно');
} 
let c4 = 2;
if (c4 > 0 && c4 < 10) {
    alert('Верно');
} else {
    alert('Неверно');
} 


let d = 13;
let e = 171;
if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}

let a = '2';
let b = '3';
alert (Number(a) + Number(b));

let monthNumber = prompt('введите номер месяца');
switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        console.log('зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log('весна');
        break;  
    case '6':
    case '7':
    case '8':
        console.log('лето');
        break;
    case '9':
    case '10':
    case '11':
        console.log('осень');
        break;
    default:
        console.log('ошибочка');
        break;
}