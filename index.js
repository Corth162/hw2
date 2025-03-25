//calculatorr

const display=document.getElementById("display");

function clickToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value= " ";
}
function calculate(){
    try {
        display.value =eval(display.value)
    }
    catch(error){
        display.value = "error";
    }
}

/*function rolldie(){
    let roll=Math.floor(Math.random() * 6) +1;
    console.log('rolled:  ${roll}');
}
function throwdice(){
    rolldie();
}*/



function rollDice() {
    let diceCount = parseInt(document.getElementById("diceCount").value);
    let results = [];
    let total = 0;

    for (let i = 0; i < diceCount; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        results.push(roll);
        total += roll;
    }
    document.getElementById("rolledResults").textContent = results.join(", ");
    document.getElementById("rolledTotal").textContent = total;
}