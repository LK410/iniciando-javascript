 function compras ( trabalho1, trabalho2) {   // função compras 

  const comprarSorvete =trabalho1 || trabalho2    // Operador OU 
  const comprarTv50 = trabalho1 && trabalho2    // Operador E
  const comprarTv32 = trabalho1   != trabalho2 // ou exclusivo
  const manterSaudavel =  !comprarSorvete  // Operador Unário
 
  return  { comprarSorvete,comprarTv50,comprarTv32,manterSaudavel}

 }


 console.log(compras(false,true))