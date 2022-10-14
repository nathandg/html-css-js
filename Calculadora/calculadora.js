let display = '0';

const displayEl = document.getElementById("display");
const buttonsEl = document.querySelectorAll(".btn");

buttonsEl.forEach((buttonsEl) => {
    buttonsEl.onclick = onButtonClickEvent
})

function onButtonClickEvent(event){

    const buttonEl = event.target;
    console.log(buttonEl);

    switch(buttonEl.innerText){
        case "C":
            clearDisplay();
            break;
        case "=":
            calcularResultado();
            break;
        default:
            adicionarCaractere(buttonEl.innerText);
            break;
    }

    updateDisplay();
}

const updateDisplay = () => {
    displayEl.innerHTML = display;
}

const clearDisplay = () => {
    display = "0";
}


const adicionarCaractere = (caractere) => {
    
    console.log(`caractere = ${caractere}`)

    if(display === "0" && caractere != "."){
        display = ""
    }

    display += caractere;
}


const calcularResultado = () => {

    try {
        display = eval(display);        
    } catch (error) {
        display = "ERR!!"
    }

}