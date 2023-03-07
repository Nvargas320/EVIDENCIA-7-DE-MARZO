
function CompararEdades() {
    let nombre1 = document.getElementById("nombre1").value;
    let nombre2 = document.getElementById("nombre2").value;
    let nombre3 = document.getElementById("nombre3").value;
    let edad1 = document.getElementById("edad1").value;
    let edad2 = document.getElementById("edad2").value;
    let edad3 = document.getElementById("edad3").value;
    
    if (edad1 > edad2 && edad1 > edad3) {
      document.getElementById("resultado").innerHTML =  " La edad mayor es de " + nombre1 ;
    } else if (edad2 > edad1 && edad2 > edad3) {
      document.getElementById("resultado").innerHTML = " La edad mayor es de " + nombre2 ;
    } else if (edad3 > edad1 && edad3 > edad2) {
      document.getElementById("resultado").innerHTML = " La edad mayor es de " + nombre3 ;
    } else {
      document.getElementById("resultado").innerHTML = "Hay dos o más personas con la misma edad más alta.";
    }
}


function GenerarNumeros() {
 
  var numero1 = Math.floor(Math.random() * 99) + 1;
  var numero2 = Math.floor(Math.random() * 99) + 1;
  var numero3 = Math.floor(Math.random() * 99) + 1;
  

  document.getElementById("numerosGenerados").innerHTML = "Los números generados son: " + numero1 + ",  " + numero2 + ", " + numero3;
}