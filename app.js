alert('Boas vindas ao Jogo do Número Secreto');
let numeroMaximo = 100

// Gera um número aleatório usando Math.random(); e garante que o número seja inteiro com parseInt()
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 1;

// Condicional que continuará repetindo o código até que a condição (chute = número secreto) seja atingida
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número de 1 a ${numeroMaximo}`);

    // Condicional para comparar o chute com o número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`); // Usa um template string para garantir que a variável "chute" seja atualizada automaticamente
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    // Adiciona uma tentativa ao contador (variável "tentativas")
    tentativas++;
}

// Usa um operador ternário para garantir que a palavra "tentativa" esteja gramaticalmente coesa com o número de tentativas necessárias
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você acertou o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}!`);
