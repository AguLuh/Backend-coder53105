// Función para sumar
function suma(a, b) {
    return new Promise((resolve, reject) => {
      if (a !== 0 && b !== 0) {
        resolve(a + b);
      } else {
        reject("Operación innecesaria");
      }
    });
  }
  
  // Función para restar
  function resta(minuendo, sustraendo) {
    return new Promise((resolve, reject) => {
      if (minuendo !== 0 && sustraendo !== 0) {
        const resultado = minuendo - sustraendo;
        if (resultado >= 0) {
          resolve(resultado);
        } else {
          reject("La calculadora sólo puede devolver valores positivos");
        }
      } else {
        reject("Operación inválida");
      }
    });
  }
  
  // Ejemplos de uso
  suma(3, 4)
    .then(resultado => console.log("Suma:", resultado))
    .catch(error => console.error("Error en la suma:", error));
  
  resta(8, 5)
    .then(resultado => console.log("Resta:", resultado))
    .catch(error => console.error("Error en la resta:", error));
  
  suma(0, 6)
    .then(resultado => console.log("Suma:", resultado))
    .catch(error => console.error("Error en la suma:", error));
  
  resta(10, 0)
    .then(resultado => console.log("Resta:", resultado))
    .catch(error => console.error("Error en la resta:", error));
  
    // Función para multiplicar
function multiplicacion(factor1, factor2) {
  return new Promise((resolve, reject) => {
    if (factor1 >= 0 && factor2 >= 0) {
      const producto = factor1 * factor2;
      if (producto >= 0) {
        resolve(producto);
      } else {
        reject("La calculadora sólo puede devolver valores positivos");
      }
    } else {
      reject("Operación inválida");
    }
  });
}

// Función para dividir
function division(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor !== 0) {
      resolve(dividendo / divisor);
    } else {
      reject("No se puede dividir por cero");
    }
  });
}

// Función asíncrona para realizar cálculos
async function calculos() {
  try {
    const resultadoSuma = await suma(3, 4);
    console.log("Suma:", resultadoSuma);

    const resultadoResta = await resta(8, 5);
    console.log("Resta:", resultadoResta);

    const resultadoMultiplicacion = await multiplicacion(2, 5);
    console.log("Multiplicación:", resultadoMultiplicacion);

    const resultadoDivision = await division(10, 2);
    console.log("División:", resultadoDivision);
  } catch (error) {
    console.error("Error en los cálculos:", error);
  }
}

// Ejecutar la función asíncrona
calculos();
