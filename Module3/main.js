//donde declaro variables

var x = "Hello World!"; 
var y = "D-power!!!";
var xy = x + "  " + y;
var o = 4
var u =2



//Mostrar en consola web

console.log(x);
console.log(y)

//escribir en el viewport con js

document.write("Hola mundo")

//suma de caracteres y para espacios esto "  "

console.log(xy)

//ifelse, ejm es si "o" es mayor que "u" ejecutar console.log

if (o >= u) {
     console.log("uwu")
}else {
     console.log("Hola")
}

//función e invocandola(la función :V), recordar que al invocarla se define parametro (el Hola, en Este caso)

function a (Hola) {
     document.write("<wrappingElement></wrappingElement>");(Hola)
};

a(" Hola!! 980");

//Variables con multiples valores = array con un for que muestra todo los nombres y un forEach que es para buscar


var nombres = ['victor','antonio','joaquin']

for ( i = 0; i < nombres.length; i++) {
     document.write(nombres[i] + '<br>')
     
};

nombres.forEach(function (nombre) {
     document.write(nombre + `<br/>`)
     
});

//alert(nombres[0]);
//el cuadro de alerta = alert("HI? user283459344")
