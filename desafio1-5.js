let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let n5 = 0;


do {
  let p1 = parseInt(prompt("Ingrese Numero:"));
  let p2 = parseInt(prompt("Ingrese Numero 2:"));
  let p3 = parseInt(prompt("Ingrese Numero 3:"));
  let p4 = parseInt(prompt("Ingrese Numero 4:"));
  let p5 = parseInt(prompt("Ingrese Numero 5:"));
  n1 = p1
  n2 = p2
  n3 = p3
  n4 = p4
  n5 = p5

  if ( n1 != NaN && n2 != NaN && n3 != NaN && n4 != NaN && n5 != NaN) {
    break;
  } else {
    alert("Ingrese todos los numeros correctamente");
  }
} while (true);

document.write(" suma total ",n1," + ",n2," + ",n3," + ",n4," + ",n5," = ",n1+n2+n3+n4+n5)
document.write(" promedio del total ",(n1+n2+n3+n4+n5)/5)