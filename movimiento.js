//funcion en el evento click 

document.getElementById("icono_menu").addEventListener("click", open_close_menu);
//Declaramos variables
var menu = document.getElementById("menu");
var icono_menu = document.getElementById("icono_menu");
var body = document.getElementById("body");

// evento que oculta y muestra
function open_close_menu(){
    body.classList.toggle("body_movimiento");
    menu.classList.toggle("menu_movimiento");
}
//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body_movimiento");
    menu.classList.add("menu_movimiento");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_movimiento");
        menu.classList.remove("menu_movimiento");
    }

    if (window.innerWidth < 760){

        body.classList.remove("body_movimiento");
        menu.classList.remove("menu_movimiento");
    }

});