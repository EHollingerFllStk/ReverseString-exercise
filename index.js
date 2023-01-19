const myStr = 'Hi my name is Widgie and I play the ukulele!';

function reverse(str) {
  //create an empty string for new string
  var newStr = [];
  //create decrementing FOR loop 
  for (let i = str.length - 1; i > 0; i--) {
    newStr += str[i];
  }
  //return the new string
  return newStr;
}

console.log(reverse(myStr))

function reverse2(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm that is not good';
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards)
  return backwards.join('') //or .toString
}

console.log(reverse2('hi my name is Beth'))


//another approach
function reverse3(str) {
  return str.split('').reverse().join('');
}

console.log(reverse3('sloths rule'))

//Another approach simplify above

const reverse4 = str => str.split('').reverse().join('');

console.log(reverse4('chippys are cute'))

//Another approach simplify above with spread operator

const reverse5 = str => [...str].reverse().join('');

console.log(reverse5('dogs are cute'))