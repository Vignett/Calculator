// strings do prompt
const opera = prompt('Qual operação você gostaria de fazer?');
const valorUm = parseInt(prompt('Qual será o primeiro número na operação?'));
const valorDois = parseInt(prompt('Qual será o segundo número na operação?'));

// funções operatórias
function soma(x, y) {
    let resultadoSoma = x + y;
    return resultadoSoma;
}

function subtracao(x, y) {
    let resultadoSubtracao = x - y;
    return resultadoSubtracao;
}

function multiplicacao(x, y) {
    let resultadoMultiplicacao = x * y;
    return resultadoMultiplicacao;
}

function divisao(x, y) {
    let resultadoDivisao = x / y;
    return resultadoDivisao;
}

// função de retorno
function operacao(opera) {
    if (opera == 'soma') {
        alert(valorUm + ' + ' + valorDois + ' = ' + soma(valorUm, valorDois));
    } else if (opera == 'subtração') {
        alert(valorUm + ' - ' + valorDois + ' = ' + subtracao(valorUm, valorDois));
    } else if (opera == 'multiplicação') {
        alert(valorUm + ' x ' + valorDois + ' = ' + multiplicacao(valorUm, valorDois));
    } else if (opera == 'divisão') {
        alert(valorUm + ' / ' + valorDois + ' = ' + divisao(valorUm, valorDois));
    } else {
        alert('0');
    }
}

operacao(opera);