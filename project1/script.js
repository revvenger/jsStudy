// for (let i = 2; i <= 16; i++) {
//         if (i % 2 === 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
//     }
    

// let i = 2;
// do{
//     i += 1;
//     if(i % 2 === 0){
//         continue;
//     }else{
//         console.log(i);
//     }
    
// }while(i < 16);

// const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for(let m = 5; m <= 10; m++){
//         arrayOfNumbers.push(m);
//     }
    
//     // Не трогаем
//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;    

// for(let j = 20; j >= 10; j-= 1){
//     if(j === 13){
//         break;
//     }
//     console.log(j);
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут;
//     let k = ' - done';
//     for(let i = 0; i < data.length; i ++){
//         if(data[i] / 5){
//             data[i] = data[i] * 2;  
//         }else{
//             data.splice(i, 1, (data[i]) + k);
//         }
//     }
//     console.log(data); 

// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 1; i < data.length + 1; i++) {
//         result.push(data[data.length - i]);
//     }
//     // Не трогаем
//     console.log(result);

// Проверяется именно переменная result, формируйте строку в ней
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

//      *
//     ***
//    *****
//   *******
//  *********
// ***********


// Место для первой задачи
// function calculateVolumeAndArea(a) {
//     if (a < 0 || typeof a != 'number' || !Number.isInteger(a)){
//         console.log("При вычислении проиошла ошибка");
//         return a;
//     }
//     let volume = a * a * a;
//     let area = a * a * 6;
//     console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
// }



// calculateVolumeAndArea(5);

// calculateVolumeAndArea(15);

// calculateVolumeAndArea(15.5);

// calculateVolumeAndArea('15');

// calculateVolumeAndArea(-15);

// function getCoupeNumber(sit) {
//     if (sit < 0 || sit > 36){
//         return "Таких мест в вагоне не существует";
//     } else if (sit < 0 || typeof sit != 'number' || !Number.isInteger(sit)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     } else {
//         console.log(Math.ceil(sit / 4));
//         return (Math.ceil(sit / 4));
//     }
// }

// getCoupeNumber(33)


// function getTimeFromMinutes(mins){
//     if (mins < 0 || !Number.isInteger(mins)){
//         console.log("Ошибка, проверьте данные");
//     } else if (mins > 0 && mins < 60){
//         console.log(`Это 0 часов и ${mins} минут`);
//     } else if (mins >= 60 && mins < 120){
//         console.log(`Это 1 час и ${mins} минут`);
//     } else if (mins >= 120 && mins < 300){
//         console.log(`Это ${(mins - (mins%60))/ 60} часа и ${mins%60} минут`);
//     } else {
//         console.log(`Это ${Math.ceil(mins/60)} часов и ${mins%60} минут`);
//     }

// }

// getTimeFromMinutes(150);
// getTimeFromMinutes(120);
// getTimeFromMinutes(50.5);
// getTimeFromMinutes(-150);


// function findMaxNumber(a, b, c, d){

//     if(typeof a != 'number' || typeof b != 'number' || typeof c != 'number' || typeof d != 'number'){
//             console.log(0);
//             return 0;
//         }
//         console.log(Math.max(a, b, c, d));
//         return Math.max(a, b, c, d);
//     }
    

    
// findMaxNumber(1, 5, 6.6, 11);

// findMaxNumber(1, 5, '6', '10');

// findMaxNumber(1, 5, 6.6);


// function fib(args){
//     const x = [];
//     if (typeof args != 'number'){
//         return "";
//     }else if(args === 0){
//         return 0;
//     }
//     for(let i = 0; i < args; i++){
//         if (i === 0){
//         x[i] = 0;            
//         } else if (i === 1){
//         x[i] = 1;
//         } else {
//         x[i] = x[i-1] + x[i-2];
//         }
        
//     }
//     let a = ((x.toString()).replace(RegExp(','), ' ')); 
//     while(a.includes(',')){
//         a = a.replace(',', '');
//     }
    
// }

// fib(4);
// fib(7);
// fib("7");
// fib(1);
// fib(0);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;
// }

// showProgrammingLangs(personalPlanPeter);


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr === undefined) {
        return (`Семья пуста`);
    } else {
        return(`Семья состоит из: ${arr.join(' ')}`);
    }
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str = '';
    for(let i = 0; i < arr.length; i++){
        str += `${arr[i].toLowerCase()}\n`;
    }

    console.log(str);
}

standardizeStrings(favoriteCities);



