function contador(){

    var quantidadeNotas = prompt ('Informe a quantidade de notas');
    var nota
    var contador = 0;
    var i = 0

    while (i < quantidadeNotas){
        nota = prompt ('Informe a nota');
        if (nota >= 7){
            contador = contador + 1;
        }
        i = i + 1;
    }
    document.write('A quantidade de alunos aprovados são: ' + contador);
}
function fibonacci (){
    var quantidadeFibonacci = prompt ('Informe a quantidade de números da sequência de Fibonacci');
    var i = 0;
    var numero1 = 0;
    var numero2 = 1;
    var numero3 = 0;
    var contador = 0;
    while (i < quantidadeFibonacci){
        numero3 = numero1 + numero2;
        numero1 = numero2;
        numero2 = numero3;
        i = i + 1;
        contador = contador + 1;
    }
    document.write('O número ' + contador + ' da sequência de Fibonacci é: ' + numero3);
}
function mdc(){
    var numero1 = prompt ('Informe o primeiro número');
    var numero2 = prompt ('Informe o segundo número');
    var i = 0;
    var contador = 0;
    while (i < numero1){
        if (numero1 % i == 0 && numero2 % i == 0){
            contador = i;
        }
        i = i + 1;
    }
    document.write('O MDC é: ' + contador);
}
function numeroPrimo(){
    var numero = prompt ('Informe o número');
    var i = 0;
    var contador = 0;
    while (i < numero){
        if (numero % i == 0){
            contador = contador + 1;
        }
        i = i + 1;
    }
    if (contador == 2){
        document.write('O número é primo');
    }
    else{
        document.write('O número não é primo');
    }
}
function somatorio(){
    var n = prompt("Informe a quantidade de números:");
        var num;
        var Soma = 0;
        var i = 0;
        
        while (i < n) {
            num = parseInt(prompt("Informe um número"));
            Soma = Soma + num;
            i = i + 1;
        }
    document.write("A Soma dos " + n + " números é " + Soma);
}
function ordenacao(){
    var numeros = [0,1,2,3,4,5,6,7,8,9];
    numeros.sort();
    document.write('Os números ordenados são: ' + numeros);
}
