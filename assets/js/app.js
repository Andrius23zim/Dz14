// 1


const array = [false, undefined, null, {}, [], 3, 'str', 6, null, 7];


function filterOnlyNumbers(arr) {
  let sum = 0;
  let count = 0;
  arr.forEach((elem) => {
    if(typeof elem === 'number') {
      sum += elem;
      count += 1;
    }
  })
  console.log(sum / count);
  return (sum / count);
}


filterOnlyNumbers(array);

///2

function doMath(a, znak, b) {
    switch(znak) {
       case '+':
       console.log(a + b);
       break;
       case '-':
       console.log(a - b);
       break;
       case '*':
       console.log(a * b);
       break;
       case '/':
       console.log(a / b);
       break;
       case '%':
       console.log(a % b);
       break;
       case '^':
       console.log(a ** b);
       break;
       default:
       console.log('Введите правильную математическую операцию!')
     }
   }
   
   doMath(7, '^', 3);

   ////3

   function createArrayOfArrays() {
    const array = [];
    const mainArrayLength = prompt('Введите длинну основного массива');
    
    for(let i = 0; i < mainArrayLength; i++) {
      array[i] = [];
      
      const innerArrayLength = prompt(`Введите длинну внутреннего массива по индексу ${i}`);
      
      for(let j = 0; j < innerArrayLength; j++) {
        const elem = prompt(`Введите значение для элемента под индексом ${j}`);
        array[i][j] = elem;
      }
    };
    
    
    console.log(array);
    return array;
  }
  
  createArrayOfArrays();

  ////4function 
  
  
  sliceElems(str, letters) {
  console.log(str);
  console.log(letters);
  
  for(let letter of letters) {
    if(str.includes(letter)) {
      str = str.replaceAll(letter, '');
    }
  }
  console.log(str);
  return str;
}

const string = prompt('Введите строку');
const arrOfLetters = prompt('Введите символы для удаления через запятую без отступов').split(',');

sliceElems(string, arrOfLetters);