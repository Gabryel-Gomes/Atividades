function fatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * fatorial(num - 1);
}

function combinacao(n, k) {
    if (n < k) {
        return "n deve ser maior ou igual a k";
    }
    return fatorial(n) / (fatorial(k) * fatorial(n - k));
}

document.addEventListener("DOMContentLoaded", function() {
    const calcularBtn = document.getElementById("calcular");
    const nInput = document.getElementById("n");
    const kInput = document.getElementById("k");
    const output = document.getElementById("output");

    calcularBtn.addEventListener("click", function() {
        const n = parseInt(nInput.value);
        const k = parseInt(kInput.value);

        if (isNaN(n) || isNaN(k)) {
            output.textContent = "Por favor, insira valores numéricos para n e k.";
        } else {
            const resultado = combinacao(n, k);
            output.textContent = A combinação de ${n} elementos tomados ${k} a ${resultado}.;
        }
    });
});


/* Questão 2 */

function calculateDays() {
    var inputDate = prompt("Digite a data no formato dd/mm/aaaa:");
    var datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    if (!datePattern.test(inputDate)) {
        alert("Formato incorreto! Por favor, insira a data no formato dd/mm/aaaa.");
        return;
    }

    var parts = inputDate.split('/');
    var userDate = new Date(parts[2], parts[1] - 1, parts[0]); // Convertendo para objeto de data

    var currentDate = new Date();
    var timeDiff = userDate.getTime() - currentDate.getTime();
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    var yearsDiff = Math.floor(daysDiff / 365);
    var monthsDiff = Math.floor((daysDiff % 365) / 30);
    daysDiff = daysDiff % 30;

    var message = "Faltam " + yearsDiff + " anos, " + monthsDiff + " meses e " + daysDiff + " dias para a data digitada.";
    alert(message);

    // Mudar a cor de fundo conforme a hora do dia
    var hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else if (hour >= 12 && hour < 18) {
        document.body.style.backgroundColor = "yellow";
        document.body.style.color = "black";
    } else if (hour >= 18 && hour < 24) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "white";
    }
}

/* Questão 3 */


function inverterTexto() {
    var inputText = document.getElementById('inputText').value.trim();
    var outputTextArea = document.getElementById('outputText');

    // Dividindo o texto em palavras
    var words = inputText.split(/\s+/);

    // Revertendo a ordem das palavras
    var reversedWords = words.reverse();

    // Juntando as palavras em uma string invertida
    var reversedText = reversedWords.join(' ');

    // Exibindo o texto invertido no segundo textarea
    outputTextArea.value = reversedText;
}


/*questão*/

let display = document.getElementById('display');
let currentNumber = '';
let operator = '';
let firstOperand = '';

function addNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function addOperator(op) {
    if (operator === '') {
        operator = op;
        firstOperand = currentNumber;
        currentNumber = '';
    }
}

function calculate() {
    if (operator === '+') {
        let result = parseFloat(firstOperand) + parseFloat(currentNumber);
        display.value = result;
        operator = '';
        currentNumber = '';
        firstOperand = '';
    }
}

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    operator = '';
    firstOperand = '';
}




function calculateDays() {
    var inputDate = prompt("Digite a data no formato dd/mm/aaaa:");
    var datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    if (!datePattern.test(inputDate)) {
        alert("Formato incorreto! Por favor, insira a data no formato dd/mm/aaaa.");
        return;
    }

    var parts = inputDate.split('/');
    var userDate = new Date(parts[2], parts[1] - 1, parts[0]); // Convertendo para objeto de data

    var currentDate = new Date();
    var timeDiff = userDate.getTime() - currentDate.getTime();
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    var yearsDiff = Math.floor(daysDiff / 365);
    var monthsDiff = Math.floor((daysDiff % 365) / 30);
    daysDiff = daysDiff % 30;

    var message = "Faltam " + yearsDiff + " anos, " + monthsDiff + " meses e " + daysDiff + " dias para a data digitada.";
    alert(message);

    // Mudar a cor de fundo conforme a hora do dia
    var hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else if (hour >= 12 && hour < 18) {
        document.body.style.backgroundColor = "yellow";
        document.body.style.color = "black";
    } else if (hour >= 18 && hour < 24) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "white";
    }
}