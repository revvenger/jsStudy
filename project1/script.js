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


