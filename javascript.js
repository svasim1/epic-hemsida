let number = Math.floor(Math.random() * 100);

let name = prompt("vad heter du? ;)");
function guess() {
   let inputField = document.getElementById("numberInput");
    console.log("test");
    let input = parseInt(inputField.value);
    console.log(input)
    if(input > number){
        alert("lägre");
        inputField.setAttribute("style", "color: red;");
    }
    else if(input < number){
        alert("högre");
        inputField.setAttribute("style", "color: red;");
    }
    else {
        alert("grattis " + name + "!");
        inputField.setAttribute("style", "color: green;");
    }
}