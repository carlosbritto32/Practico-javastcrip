// codigo del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden : " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}

perimetroCuadrado();

// console.log("el perimetro del cuadrado mide : " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}

// console.log("el area del cuadrado mide : " + areaCuadrado + "cm cuadrado");

console.groupEnd();

// Codigo del triangulo

console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo3 = 4;
// const alturaTriangulo = 5.5;

// console.log(
//   "Los lados del triangulo miden : " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm",
//   "y",
//   baseTriangulo3,
//   "cm"
// );

// console.log("La altura de triangulo mide : " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// console.log("el perimetro del triangulo mide : " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// console.log("el area del triangulo mide", areaTriangulo, "cm cuadrados");

console.groupEnd();

// codigo Circulo

console.group("Circulo");

// const radioCirculo = 4;
const pi = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * pi;
}

function areaCirculo(radio) {
  return pi * radio ** 2;
}

console.groupEnd();

// Aqui interactuamos con Html

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById("lado1");
  const lado2 = document.getElementById("lado2");
  const base = document.getElementById("base");
  // const altura = document.getElementById("altura");
  const valueL1 = Number(lado1.value);
  const valueL2 = Number(lado2.value);
  const valueB = Number(base.value);
  // const valueA = altura.value;

  const perimetro = perimetroTriangulo(valueL1, valueL2, valueB);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const base = document.getElementById("base");
  const altura = document.getElementById("altura");
  const valueB = Number(base.value);
  const valueA = Number(altura.value);

  const area = areaTriangulo(valueB, valueA);
  alert(area);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}
