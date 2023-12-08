console.log("---------Desafío 6---------");
console.log("---------Inciso 2----------");
document.addEventListener("DOMContentLoaded",mostrarMensajeLoaded);
function mostrarMensajeLoaded() {
    //Se van a llamar todas las funciones de los puntos a desarrollar considerando
    //que no se puede editar el HTML, y la referencia al main.js esta al principio
    //del HTML, por lo tantno hay que esperar que cargue el DOM para poder interactuar
    //con los componentes HTML
    console.log("Contenido del DOM cargado");    
    // ----------------------------------
    //cuando se modifica el valor del tectarea se debería llamar a
    //la funcion puntoCuatro. La funcion puntoTres asigna valor al textArea
    //pero por algun motivo no se ejecuta la funcion puntoCuatro al modificarse el value 
    //del textArea.. Por eso esta comentadas las siguientes dos lineas y se agrega
    //la funcion puntoCuatro despues del puntoTres() PREGUNTAR A MARCOS xq no funciona.
    let textAreaOrigen=document.getElementById("origen");
    textAreaOrigen.addEventListener("input",puntoCuatro);
    // ----------------------------------
    puntoTres();
    puntoCinco();
    puntoSeis();
    puntoSiete();
}

function puntoTres()
{
    let textAreaOrigen=document.getElementById("origen");
    console.log("---------Inciso 3----------");    
    textAreaOrigen.value="<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";
    console.log("Ejecutado");    
}

function puntoCuatro()
{
    console.log("---------Inciso 4----------");
    let disabledValue=true;
    let inputCollection=document.getElementsByTagName("input");
    let textAreaOrigen=document.getElementById("origen");
    if(textAreaOrigen.value)
        disabledValue=false;  

    for (let index = 0; index < inputCollection.length; index++) {
        inputCollection[index].disabled=disabledValue;
    }  
    (document.getElementsByTagName("button"))[0].disabled=disabledValue;

    console.log("Ejecutado");
}

function puntoCinco()
{
    console.log("---------Inciso 5----------");
    let btnReemplazar=document.getElementById("btn-reemplazar");
    let btnAgregarHTMLCollection=document.getElementsByClassName("btn-agregar");
    
    btnReemplazar.addEventListener("click",reemplazarOrigenDestino);
    btnAgregarHTMLCollection[0].addEventListener("click",agregarOrigenDestino);
    btnAgregarHTMLCollection[1].addEventListener("click",agregarCincoOrigenDestino);
    btnAgregarHTMLCollection[2].addEventListener("click",agregarDiezOrigenDestino);
    btnAgregarHTMLCollection[3].addEventListener("click",agregarNVecesOrigenDestino);
    console.log("Ejecutado");
}

function reemplazarOrigenDestino()
{
    let textAreaOrigen=document.getElementById("origen");
    let divDestino=document.getElementById("destino");
    divDestino.innerHTML=textAreaOrigen.value;
}

function agregarOrigenDestino()
{
    let textAreaOrigen=document.getElementById("origen");
    let divDestino=document.getElementById("destino");
    divDestino.innerHTML=divDestino.innerHTML+textAreaOrigen.value;
    // textAreaOrigen.value=divDestino.innerText;

    // let textAreaOrigenB=document.getElementById("origenB");
    // alert("va agregar");
    // textAreaOrigenB.value=textAreaOrigen.value;
}

function agregarCincoOrigenDestino()
{
    let textAreaOrigen=document.getElementById("origen");
    let divDestino=document.getElementById("destino");
    for (let index = 1; index <= 5; index++) {
        divDestino.innerHTML=divDestino.innerHTML+textAreaOrigen.value;
    }
}

function agregarDiezOrigenDestino()
{
    let textAreaOrigen=document.getElementById("origen");
    let divDestino=document.getElementById("destino");
    for (let index = 1; index <= 10; index++) {
        divDestino.innerHTML=divDestino.innerHTML+textAreaOrigen.value;
    }    
}

function agregarNVecesOrigenDestino()
{
    let cantidad=prompt("Cuantas veces desea agregar el contenido Origen en el Destino?")
    if(parseInt(cantidad))
    {
        let textAreaOrigen=document.getElementById("origen");
        let divDestino=document.getElementById("destino");
        for (let index = 1; index <= parseInt(cantidad); index++) {
            divDestino.innerHTML=divDestino.innerHTML+textAreaOrigen.value;
        }
    }
    else
        alert(`Ud. a Ingresado "${cantidad}" como cantidad; recuerde que solo se 
    admiten valores númericos y mayores a 0...`);    
}

function puntoSeis()
{
    console.log("---------Inciso 6----------");
    let btnVaciar=(document.getElementsByClassName("btn-vaciar"))[0];
    let btnMayuscula=(document.getElementsByClassName("btn-convertir-a-mayusculas"))[0];
    let btnMinuscula=(document.getElementsByTagName("button"))[0];

    btnVaciar.addEventListener("click",vaciarDestino);
    btnMayuscula.addEventListener("click",convertirMayusucla);
    btnMinuscula.addEventListener("click",convertirMinuscula);
    console.log("Ejecutado");
}

function vaciarDestino()
{
    let divDestino=document.getElementById("destino");
    divDestino.innerHTML="";
}

function convertirMayusucla()
{
    let divDestino=document.getElementById("destino");
    divDestino.innerHTML=divDestino.innerHTML.toUpperCase();
}

function convertirMinuscula()
{
    let divDestino=document.getElementById("destino");
    divDestino.innerHTML=divDestino.innerHTML.toLowerCase();
}

function puntoSiete()
{
    console.log("---------Inciso 7----------");
    let inputCollection=document.getElementsByTagName("li");
    for (let index = 0; index < inputCollection.length; index++) {       
	inputCollection[index].innerHTML='[Ok] '.concat(inputCollection[index].innerHTML);	
    }  
    console.log("Ejecutado");
    
}

