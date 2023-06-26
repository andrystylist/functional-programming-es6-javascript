const arr = [1, 2, 3, 4, 5, 6]

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

const result1 = arr.map(function (item) {
  return item * 2
})
console.log(result1)

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

const result2 = arr.filter(function (item) {
  return item % 2 === 0
})
console.log(result2)

// utilizar el método reduce para sumar todos los elementos
// 21

const result3 = arr.reduce(function (acum, item) {
  return acum + item
}, 0)
console.log(result3)
