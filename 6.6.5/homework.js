/*Есть объект obj. В одном из ключей объекта — массив. 
Добавьте в новый массив arrValues значения всех ключей объекта. 
Если значение — массив, добавьте каждый элемент в массив arrValues.

Выведите получившийся массив в консоль.*/

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const resultArray = [];

for(let val in obj) {
  if(Array.isArray(obj[val])) {
    for (let j = 0; j < obj[val].length; j++) {
      resultArray.push(obj[val][j])
    }
  } else {
    resultArray.push(obj[val])
  }
}
console.log(resultArray)