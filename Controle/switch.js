
// Criado a  constante que vai recevber uma funcao que tem como parametro uma nota
const imprimirResultado = function (nota) {

    switch (Math.floor(nota)) {

        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado! Vai estudar mais!')
            break
          default:
              console.log('Nota/Numero inválido')
            
    }
}

//seleção Multipla
//Break para casa Case
//Senao colocar Break , ele vai executar todos os cases.
//Não retorna um valor verdadeiro ou falso

imprimirResultado(-1)