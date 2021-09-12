// codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden : " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("el perimetro del cuadrado mide : " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("el area del cuadrado mide : " + areaCuadrado + "cm cuadrado");

console.groupEnd();

// Codigo del triangulo

console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;
const alturaTriangulo = 5.5;

console.log(
  "Los lados del triangulo miden : " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm",
  "y",
  baseTriangulo3,
  "cm"
);

console.log("La altura de triangulo mide : " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3;

console.log("el perimetro del triangulo mide : " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo3 * alturaTriangulo) / 2;

console.log("el area del triangulo mide", areaTriangulo, "cm cuadrados");

console.groupEnd();

// codigo Circulo

console.group("Circulo");
const radioCirculo = 4;
const diametro = radioCirculo * 2;
const pi = Math.PI;
// circunferencia
const perimetroCirculo = diametro * pi;
const areaCirculo = radioCirculo * radioCirculo * pi;

console.log("el radio del circulo es :", radioCirculo, "cm");
console.log("el diametro del circulo es :", diametro, "cm");
console.log("PI es :", pi, "cm");
console.log("La circunferencia del circulo es :", perimetroCirculo, "cm");
console.log("el area del circulo es :", areaCirculo, "cm cuadrados");

console.groupEnd();
