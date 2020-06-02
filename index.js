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

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) {
  while(i < facts.length) {
    let arr2 = `${facts[i]} !!!`;
    return arr2;
  }
}