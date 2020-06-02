// add solution here
let musicians = ['John Lennon', 'Grimes'];
let instruments = ['guitar', 'Hydrolauphone'];
function theBeatlesPlay(musicians,instruments) {
  let arr1 = [];
  for (let i=0; i < musicians.length; i++) {
    arr1.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr1;
}


function johnLennonFacts(facts) {
  
  let counter =0;
  let arr2= [];
  while(arr2.length < facts.length) {
    arr2.push(`${facts[counter]}!!!`);
    counter++
  }
  return arr2;
}