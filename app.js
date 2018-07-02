/*Crea una función que compruebe si un número es par o impar.

Sigue los pasos a continuación para que completes el programa.

Implementa una función comprobar(n). Nota: Puedes usar el operador modulo: %.
Si el número es par retornar 0.
Si el número es impar retornar 1.*/
function comprobar(n){
    if(n % 2 == 0) {//se da condicion para que retorne par
        return "par";
      }
      else {
        return "impar";//si modulo de n es distinto de 0, será impar
      }
    };
    console.log(comprobar(144));// deberia dar par para 144
