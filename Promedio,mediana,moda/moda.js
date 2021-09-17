const lista1 = [
  1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 4, 3, 3, 3, 3, 4, 4, 4, 4, 5, 55, 5, 5, 5, 6, 6,
  7, 8, 7, 9, 8, 8, 7, 7,
];

const lista1Count = {};

lista1.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

const lista1Array = Object.entries(lista1Count).sort(function (
  valorAcumulado,
  nuevoValor
) {
  return valorAcumulado[1] - nuevoValor[1];
});

const moda = lista1Array[lista1Array.length - 1];
