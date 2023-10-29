module.exports = function toReadable (number) {
  const numbers = {
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
    10:'ten',
    11:'eleven',
    12:'twelve',
    13:'thirteen',
    14:'fourteen',
    15:'fifteen',
    16:'sixteen',
    17:'seventeen',
    18:'eighteen',
    19:'nineteen',
    20:'twenty',
    30:'thirty',
    40:'forty',
    50:'fifty',
    60:'sixty',
    70:'seventy',
    80:'eighty',
    90:'ninety',
    100:'hundred',
    1000:'thousand',
    10000:'million'
  };
  
  let divid = 100;
  let outputarr = [];
  let range = 100;
  
  function getNameofNamber (number, div) {
    let temp = number % div;
    console.log(temp);
    if (temp < 20) {
      outputarr.unshift(numbers[temp])
    } 
    else {
      outputarr.unshift(numbers[temp % 10]);
      outputarr.unshift(numbers[Math.trunc(temp / 10)*10]);
    }
    number = Math.trunc(number / div);
    console.log(number);
    if (number > 0) {
      outputarr.unshift(numbers[range]);
      range *= 10;
      outputarr.unshift(numbers[number % 10]);
      number = Math.trunc(number / 10);
      console.log(number);
  }
if (number > 0) {
  outputarr.unshift(numbers[range]);
  range /= 10;
  getNameofNamber (number, divid);
}

  };

if  (number == 0) {
   return 'zero'
  } 
  else { 
    getNameofNamber (number, divid);
   return outputarr.join(' ').trim();
  }  
}
