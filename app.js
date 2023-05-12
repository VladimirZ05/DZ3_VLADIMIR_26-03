// При помощи цикла for напишите программу «FizzBuzz», которая будет выводить в консоли все числа от 1 до 100 с тремя исключениями:
//  ⁃ 1)Если число делится нацело на 3, вместо числа должно выводиться «Fizz»
//  ⁃ 2)Если число нацело делится на 5 (но не на 3), вместо числа должно выводиться «Buzz»
//  ⁃ 3)После этого сделайте так, чтобы программа выводила «FizzBuzz» для чисел, которые делятся и на 3, и на 5
//
// ДЗ2:
//  ⁃ Есть массив с элементами: ['milk', 'beer', 'beer', 'milk', 'milk']. Необходимо запустить в цикле проверку для каждого элемента массива -
// когда встречается элемент со значением "milk", в консоль выводить строку "good", если встречается элемент со значением "beer",
//     выводить в консоль строку "bad". Выполнить дз при помощи цикла.


var FizzBuzz
for (var i = 1 ; i<101; i++ ){
if (i%3===0) console.log('Fizz');
else if (i%5===0) console.log('Buzz');
else if (i%3===0 && i%5===0) console.log('FizzBuzz')

    continue
}



var products = ['milk', 'beer', 'beer', 'milk', 'milk']
var bad = ['beer']
var good = ['milk']
for (var i = 0; i<products.length; i++){
if (bad.includes(products[i].toLowerCase())){
    console.log('Bad!')}
if (good.includes(products[i].toLowerCase()))
    console.log('Good!')
    continue
}