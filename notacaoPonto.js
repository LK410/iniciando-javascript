
 // Notação Ponto //

function Obj (nome){

    this.nome =nome
    this.exec =function () {

        console.log('Executando...')
    }
}


const obj1 = new Obj ('Cadeira')



obj1.exec()
