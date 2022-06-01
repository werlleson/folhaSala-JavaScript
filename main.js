function resultado() {
   let qtRecebeHora = document.getElementById("qtRecebeHora").value;
  let qtdHorasMes = document.getElementById("qtdHorasMes").value;
  let resposta = document.getElementById("resposta");
  let resMultiplica = qtRecebeHora * qtdHorasMes;
  
  if (qtRecebeHora == "" || qtdHorasMes == "") 
  return alert("Preencha todos os campos");

  let conta 

  if ( resMultiplica <= 900) conta = "isento";
  if ( resMultiplica > 900 &&  resMultiplica <= 1500) conta = "minimo";
  if ( resMultiplica > 1500 &&  resMultiplica <= 2500) conta = "medio";
  if ( resMultiplica >= 2501) conta = "maximo";


  switch (conta) {
    case "isento":
      resposta.innerHTML = "Você esta isento de desconto de INSS";
      break;
    case "minimo":
      imprime(5,  resMultiplica);
      break;
    case "medio":
      imprime(10,  resMultiplica);
      break;
    case "maximo":
      imprime(20,  resMultiplica);
      break;
    default:
      resposta.innerHTML = "error"
  }
}

function imprime(impDeRenda,  resMultiplica) {
  let impostoRenda = ( resMultiplica * impDeRenda) / 100;
  let sindicato = ( resMultiplica * 3) / 100;
  let fgts = ( resMultiplica * 11) / 100;
  let salarioLiquido =  resMultiplica - impostoRenda - sindicato - fgts;

  resposta.innerHTML = `
  Salário bruto: R$ ${ resMultiplica}
  <br/>(-) Imposto de renda (${impDeRenda}%): R$  ${impostoRenda}
  <br/>(-) Sindicato (3%): R$  ${sindicato}
  <br/>(-) FGTS (11%): R$  ${fgts}
  <br/>Salário líquido: R$ ${salarioLiquido}
  `;
}

