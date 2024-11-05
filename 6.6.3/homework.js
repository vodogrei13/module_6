/*С помощью цикла нарисуйте в консоли заполненное поле для игры «Крестики-нолики». Выведите результат в консоль.*/

const desktop = [ 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];

const arr= [];
let index = 0;

for(let i = 0; i < 3; i += 1) {
    arr[i] = [];

    for(let j = 0; j < 3; j += 1) {
        arr[i][j] = desktop[index];
        index += 1;
    }
}

 let num = []
 for (let i = 0; i < arr.length; i += 1) {
    for(let j = 0; j < arr[i].length; j += 1) {
        num += `${arr[i][j]}`;
    }
    num +='\n';
   
}
console.log(num);