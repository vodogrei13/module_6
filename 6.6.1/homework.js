/* Напишите проверку, которая позволит определить, 
является слово палиндромом или нет.*/

const string = 'ДоВоД';

if(string.split('').reverse().join('').toLowerCase() == string.toLowerCase()) {
    console.log('Слово является палиндромом')
} else {
    console.log('Слово не является палиндромом')
}
