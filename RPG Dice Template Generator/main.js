let results = [];
let dicesSum;
document.getElementById("createTemplateBtn").onclick = function () {
  const diceSides = Number(document.getElementById("diceSides").value);
  const diceNumber = Number(document.getElementById("diceNumber").value);
  const diceModifier = Number(document.getElementById("diceModifier").value);
  const templateName = document.getElementById("templateName").value;
  const templateExecute = document.createElement("button");
  templateExecute.innerHTML = templateName;
  document.body.appendChild(templateExecute);
  templateExecute.style.padding = "10px";
  templateExecute.onclick = function () {
    //if statements to avoid the sum of the arrays
    if (results.length >= diceNumber) {
      results = [];
      templateExecute.onclick;
    } else if (results.length != 0) {
      results = [];
      templateExecute.onclick;
    }
    //for loop to generate random results based on the number of dices and then pack them into an array
    for (let n = 1; n <= diceNumber; n++) {
      x = Math.floor(Math.random() * diceSides + 1) + diceModifier;
      results.push(x);
    }
    dicesSum = sum(...results);
    document.getElementById(
      "displaySum"
    ).innerHTML = `${diceNumber}d${diceSides} + ${diceModifier} : ${dicesSum}`;
    console.log(`${diceNumber}d${diceSides} + ${diceModifier} : ${dicesSum}`);
    document.getElementById("displayDices").innerHTML = `{${results}}`;
    console.log(`{${results}}`);
  };
  //function that sums de results of the dices
  function sum(...list) {
    let i = 0;
    for (let item of list) {
      i += item;
    }
    return i;
  }
};
