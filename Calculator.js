let operation = "";
function updateText(text) {
    document.querySelector("textarea").value = text;
}

function erase() { 
    operation = "";
    updateText(operation);
}

function addDigitOrSign(char) {
    operation += char;
    updateText(operation);
} 
 
function calculate() {
    updateText(eval(operation));
    operation = "";
}