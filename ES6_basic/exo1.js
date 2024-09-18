function addition_number (x, y) {
  return x + y
}


function isEven(number) {
  if (number%2 == 0){
    return true
  }

  return false
}


function countToN(n) {

  for (index = 0 ; index < n ; index++){
    console.log(index);
  }


}

function fizzBuzz() {
  let index;
  for(index = 1 ; index < 101 ; index++ ){

    if (index % 3 == 0 && index % 5 == 0) {
      console.log("FizzBuzz")}

    else if (index % 3 == 0) {
      console.log("Fizz")}

    else if (index % 5 == 0) {
      console.log("Buzz")}

    else { console.log(index) }
  }

}


function calculator(num1, num2, operation) {

let total;

if (operation === '+'){
c
  total = num1 + num2
}

if (operation === '-'){

  total = num1 - num2;
}

if (operation === '*'){

  total = num1 * num2;
}

if (operation === '/'){

  total = num1 / num2;
}

else {"operation must be +-*/" }



}






