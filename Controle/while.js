 function getInteiroAleatorioEntre(min,max){
 const valor = Math.random() * (max - min) + min
   return Math.floor(valor)

 }
                
 let opcao =0

 while (  opcao != -1) { // enquanto opcao for  diferente de -1 , faça o que tem na chave abaixo.

    opcao = getInteiroAleatorioEntre(-1,3)
    console.log( `Opcao escolhida foi   ${opcao}.`)
 }

 console.log('Até a proxíma')