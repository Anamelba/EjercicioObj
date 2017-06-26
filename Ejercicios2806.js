// EJERCICIO 1
function formulas()
{
  this.areaRectangulo = function(base, altura)
  {
    return base*altura;
  }
}
var f = new formulas();
console.log("El área del rectangulo de 3 x 7 es " + f.areaRectangulo(3, 7));

// EJERCICIO 2
function calcularEdad(nombre, diaNac, mesNac, anioNac){

	var obj=
        {
			nombre:nombre,
			diaNac:diaNac,
			mesNac:mesNac,
			anioNac:anioNac
        }
	var fecha_hoy = new Date();
	var ahora_anio = fecha_hoy.getFullYear();
	var ahora_mes = fecha_hoy.getMonth();
	var ahora_dia = fecha_hoy.getDate();
	var edad = ahora_anio - obj.anioNac;

	if (ahora_mes < (obj.Nac -1))
    {
		edad --;
    }
	if(((obj.mesNac - 1) == ahora_mes) && (ahora_dia < obj.diaNac))
    {
		edad --;
    }

	return "La edad actual de " + obj.nombre + " es: " + edad;
}
console.log(calcularEdad("Lissette", 02, 05, 1994));

// EJERCICIO 3
function people(nombre, edad, pasatiempo)
{
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
}
var p = new people("aa", 23, "voley");
console.log("Hola soy " + p.nombre + " tengo " + p.edad + " y me gusta " + p.pasatiempo);
