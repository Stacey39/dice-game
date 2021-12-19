// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example: 
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6
const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}

// Here's a test roll, check the console!
console.log(getRandomDiceRoll())
const face = document.querySelector(`#face`);
const rollnum = document.querySelector(`#rollnum`);
const roll = document.querySelector(`#roll`);
const last = document.querySelector(`#last`);
const now = document.querySelector(`#now`);
const win = document.querySelector(`#win`);

// 1) Call getRandomDiceRoll() and store the result as a variable named "diceRoll"
var diceRoll=getRandomDiceRoll();
// 2) Update user interface (document), showing the diceface (svg image) that matches the roll number

// 3) Use `diceRoll` to update the label "You rolled: #" (replacing # with the roll)

// 4) Wrap the dice roll procedure in a function named rollTheDice(), call it from the console to test
const rollTheDice=function(){
getRandomDiceRoll()

}
var lastDice=0;


roll.addEventListener(`click`, function(){
  diceRoll=getRandomDiceRoll();
  switch(diceRoll){
    case 1:
      stringnum = 'One';
      face.setAttribute(`src`,"img/dice1.svg")
      break;
    case 2:
      stringnum = 'Two';
      face.setAttribute(`src`,"img/dice2.svg")
      break;
    case 3:
      stringnum = 'Three';
      face.setAttribute(`src`,"img/dice3.svg")
      break;
    case 4:
      stringnum = 'Four';
      face.setAttribute(`src`,"img/dice4.svg")
      break;
    case 5:
      stringnum = 'Five';
      face.setAttribute(`src`,"img/dice5.svg")
      break;
    case 6:
      stringnum = 'Six';
      face.setAttribute(`src`,"img/dice6.svg")
      break;
  }
  rollnum.textContent=diceRoll;
  last.textContent=lastDice;
  now.textContent=diceRoll;
  if(diceRoll>lastDice){win.textContent="This time win"; }
  else if (diceRoll<lastDice){win.textContent="Last time win"; }
  else {win.textContent="They are equal"; }




  lastDice=diceRoll;
})



console.log(rollTheDice())