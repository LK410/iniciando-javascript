// Função  - Conceito
//  Conceito  de funçao  executa alguma coisa /é uma acão/ Vai fazer algo
// Existe  um código que vai  fazer essa função. Geralmente é um verbo.
//TOda função tem UM NOME / RECEBE ALGUMA ENTRADA/RETORNA ALGUM VALOR
//Pode não retornar nada

function imprimirSoma (a,b){
console.log(a +b)

}

imprimirSoma(10,10)


function soma (a , b=0) {

    return a + b

}
console.log(soma(5,10))