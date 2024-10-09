
// задание 1
for (let i = 0; i < 2; i++) {
    console.log('привет');
}

// задание 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//задание 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//задание 4
const obj = {
    Nic: '200',
    Vasya: '300',
    Petr: '400'
}
for (const key in obj) {
    console.log(`${key} - ${obj.[key]} долларов`);
}

//задание 5

let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
}
console.log(`количество циклов: ${num}`);

//задание 6
let dayFriday = 3;
let allDay = 31;
for (let i = dayFriday; i <= allDay; i += 7) {
    console.log(`сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}