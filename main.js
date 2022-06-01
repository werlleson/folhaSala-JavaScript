function resultado() {
  let qtRecebeHora = document.getElementById("qtRecebeHora").value  ;
  let qtdHorasMes = document.getElementById("qtdHorasMes").value;
  let resposta = document.getElementById("resposta");
  let resultadoMult = qtRecebeHora * qtdHorasMes;


  if(qtRecebeHora == "" || qtdHorasMes == ""){
    alert ("Preencha todos os campos");
  }

  if (resultadoMult <= 901){
       resposta.innerHTML = "Você esta isento de desconto de INSS";
  }
  if (resultadoMult <= 1500){
    let impostoRenda = (resultadoMult * 5) / 100;
    let sindicato = (resultadoMult * 3) / 100;
    let fgts = (resultadoMult * 11) / 100;
    let salarioLiquido = resultadoMult - impostoRenda - sindicato - fgts; 
    
    resposta.innerHTML = `
    Salário bruto: R$ ${resultadoMult}
    <br/>(-) Imposto de renda (5%): R$  ${impostoRenda}
    <br/>(-) Sindicato (3%): R$  ${sindicato}
    <br/>(-) FGTS (11%): R$  ${fgts}
    <br/>Salário líquido: R$ ${salarioLiquido}
    `
}
  else{
    alert('error1')
  }
}
