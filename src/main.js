//Exercio 1 - dobro
const escolhaUmNumero = prompt("Escolha um número")
const dobro = escolhaUmNumero * 2
alert("Obrigado!! o dobro do número que você escolheu é " + dobro )

//Jantar 

const valor = prompt("Seu jantar acabou, estava bom? Qual o valor da sua conta?")
const valorConvertido = Number(valor)
const taxa = valor * 0.10
const total = valorConvertido + taxa;

alert("Ótimo, temos a taxa de 10%, com isso o total da sua conta é " + total )


//Pizzaria

const valorTotalConta = parseFloat(prompt("Estava bom seu jantar? qual o valor da sua conta?"));
const numeroClientes = parseInt(prompt("Digite o número de clientes:"));
const valorPorCliente = valorTotalConta / numeroClientes;
alert("Cada pessoa deve pagar: R$" + valorPorCliente.toFixed(2));
