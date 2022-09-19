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

function getCoupeNumber(sit) {
    if (sit < 0 || sit > 36){
        return "Таких мест в вагоне не существует";
    } else if (sit < 0 || typeof sit != 'number' || !Number.isInteger(sit)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else {
        console.log(Math.ceil(sit / 4));
        return (Math.ceil(sit / 4));
    }
}

getCoupeNumber(33)