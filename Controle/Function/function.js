// Criar  funcão  de forma literal . recebe parametros e retorna um valor,caso função nao retorna nada , ela
//sempre vai  retornar undefined!!



// Criando função de forma literal
 function fun1 () {}

 //Armazenando uma função em uma variável
 const fun2 = function() {}

 // Armazenndo uma função em um Array 
const array = [function (a,b) { return a+b},fun1 ,fun2 ]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto 

const  obj =  {}

obj.falar = function (){
    return 'olá mundo!'
}
console.log(obj.falar())


// Passar uma  função com parametro....

function run(fun) {


    fun()
}
run (function() {console.log('Executando')} )


//Uma função pode retornar uma Função...


function soma( a,b){

    return function(c) {
        console.log(a + b + c )

    }
}
 
soma( 5,5) (5)