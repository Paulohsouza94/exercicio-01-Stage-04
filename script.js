let numberOne = Number(prompt(`Digite o primeiro número:`));
let numberTwo = Number(prompt(`Digite o segundo numero número:`));

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const multi = numberOne * numberTwo;
const div = (numberOne / numberTwo).toFixed(2);
const restDiv = numberOne % numberTwo;

alert(`Soma: ${sum}`);
alert(`Subtração: ${sub}`);
alert(`Multiplicação: ${multi}`);
alert(`Divisão: ${div}`);
alert(`Resto da divisão: ${restDiv}`);

let evenNumbers = alert(
  sum % 2 === 0
    ? `O resultado da soma dos dois números, que foi ${sum}, é um número par.`
    : `O resultado da soma dos dois números, que foi ${sum}, é um número Impar.`
);

let comparingNumbers = alert(
  numberOne == numberTwo
    ? `Os números digitados são iguais`
    : `Os números digitados são diferentes`
);
