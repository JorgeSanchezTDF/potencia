/*Métodos
Ejercicio: Potencias

• Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.*/

function potencia(base: number, exponente: number): number {
  let resultado: number = 1;
  for (let i = 0; i < exponente; i++) {
    resultado = resultado * base;
  }
  return resultado;
}

console.log(potencia(2, 3));
