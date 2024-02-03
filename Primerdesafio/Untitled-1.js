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
  