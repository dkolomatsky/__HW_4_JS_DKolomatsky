// Напиши функцію map(fn, array), яка приймає на вхід функцію і масив [1,3,4,5,6,7,23,12,345], і обробляє кожен елемент масиву цією функцією, повертаючи новий масив з взведеним у квардат кожним елементом масву.
const array = [1,3,4,5,6,7,23,12,345];
function map(fn, array){
  let newArray = [];
  for(let i=0;i<array.length;i++){
   newArray.push(fn(array[i]));
  }
return newArray;
}

const fn = array.map((arr) => arr ** 2);

console.log(fn);


// Перепишіть функцію, використовуючи оператор '?' або '||'.
// Наступна функція повертає true, якщо параметр age більше 18. В іншому випадку вона ставить запитання confirm і повертає його результат.
function checkAge(age) {
  // if(age > 18){
  //   return true;
  // } else {
  //   return confirm('Родители разрешили?');
  // }
  return age > 18 ?  true : confirm('Родители разрешили?');
}
console.log(checkAge(20));



