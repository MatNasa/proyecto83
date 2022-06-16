var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//crea una variable que se llame width y que sea igual con  screen.width; para almacenar el ancho de la pantalla
var width = screen.width;
 //crea una variable que se llame new_width y que sea igual con  screen.width - 70; para almacenar el nuevo ancho de la pantalla
var new_width = screen.width - 70;
//crea una variable que se llame new_height y que sea igual con  screen.height - 300; para almacenar el nuevo alto de la pantalla
var new_height = screen.height - 300;
 if ( width < 992 )
	{
	document.getElementById

	canvas.addEventListener("touchstart", my_touchstart); //Usaremos dos eventos táctiles touchstart, cuando toques la pantalla, se ejecutará el evento.
    }
function my_touchstart()
{
	//imprime en la consola my_touchstart en la pantalla de la consola para estar seguros de que la función se ejecuta.
    console.log(my_touchstart);
  //Actividad adicional
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;
  //Final de la actividad adicional
         
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft; //obtenemos las coordenadas "X" actuales en el lienzo. Las vamos a tocar y a almacenar dentro de la variable
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop; //obtenemos las coordenadas "Y" actuales en el lienzo. Las vamos a tocar y a almacenar dentro de la variable
}
//usa el comando addEventListener en el canvas, agrega el evento touchmove y llama a la función my_touchmove
canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{

	console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft; //vamos a obtener las coordenada "X" actuales en el lienzo donde movemos el dedo y lo almacenamos en la variable
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop; //vamos a obtener las coordenada "Y" actuales en el lienzo donde movemos el dedo y lo almacenamos en la variable

   
    ctx.beginPath(); //le indica al lienzo que comience a dibujar una figura u objeto.
    ctx.strokeStyle = color; // Establece el color del dibujo usando la variable
    ctx.lineWidth = width_of_line; //Establece el ancho del objeto dibujado.

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
    
    // end of old same old as the paint web app
}

    // old same old as the paint web app
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    // end of old same old as the paint web app


    
