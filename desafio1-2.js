let n1 = 0;
let n2 = 0;

do {
  let p1 = parseInt(prompt("Ingrese Numero,debe ser mayor a cero:"));
  let p2 = parseInt(prompt("Ingrese Numero 2, debe ser distintos y mayor a cero:"));
  n1 = p1
  n2 = p2

  if (n1 != n2 && n1 > 0 && n2 > 0&& n1!=NaN && n2!=NaN) {
    break;
  } else {
    alert("No se cumple con que los numeros sean distintos y que no sean igual 0");
  }
} while (true);

console.log("la suma de: " + n1 + " + " + n2 + " = " + (n1 + n2));
console.log("la resta de: " + n1 + " - " + n2 + " = " + (n1 - n2));
console.log("la división de: " + n1 + " / " + n2 + " = " + n1 / n2);
console.log("la multiplicación de: " + n1 + " x " + n2 + " = " + n1 * n2);
console.log("El módulo de: " + n1 + " y " + n2 + " = " + (n1 % n2));
