//este codigo se ejecuta cuando la pagina termina de cargar

document.addEventListener("DOMContentLoaded", function() {
    const sendBtn = document.getElementById("sendBtn");
    const input = document.getElementById("messagesInput");
    const messages = document.getElementById("messages");

//diccionario con prop. CSS
const propiedadesCSS = {
    css: "css es el lenguaje de programacion encargado de darle un estilo a nuestra pagina web. ",
    color: "la propiedad 'color' cambia el color del elemento.",
    margin: "la propiedad 'Margin' agrega un espacio o margen alrededor de un elemento.",
    padding: "la propiedad 'Padding' agrega espacio dentro de un elemento",
    fontfamily: "Define el tipo de fuente que se mostrara, se le puede cambiar el tamaño con la propiedad Font-size.",
    width: "Define el ancho de un elemento, el valor se puede escribir en pixels, ems o porcentaje. se le puede asignar un ancho minimo o maximo (max-width/min-width)",
    height: "Define el alto de un elemento, el valor se puede escribir en pixels, ems o porcentaje. se le puede asignar un alto minimo o maximo (max-height/min-height)",
    border: "Define el borde de un elemento, su color, su estilo y grosor",
    background: "Define los fondos de un objeto. El fondo puede ser una imagen (background-image) o un color(background-color).",
    display: "la propiedad 'display' define cómo se muestra un elemento en la página (por ejemplo: en bloque, en línea o como flexbox).",
    flex: "la propiedad 'flex' controla cómo un elemento crece o se reduce dentro de un contenedor con display:flex.",
    justifycontent: "la propiedad 'justify-content' alinea los elementos horizontalmente dentro de un contenedor flex.",
    alignitems: "la propiedad 'align-items' alinea los elementos verticalmente dentro de un contenedor flex.",
    overflow: "la propiedad 'overflow' decide qué hacer si el contenido se sale del tamaño del elemento (puede ocultarlo o poner scroll).",
    borderradius: "la propiedad 'border-radius' redondea las esquinas de un elemento.",
    boxshadow: "la propiedad 'box-shadow' agrega una sombra alrededor del elemento.",
    textalign: "la propiedad 'text-align' alinea el texto (izquierda, centro o derecha).",
    fontsize: "la propiedad 'font-size' cambia el tamaño del texto.",
    gap: "la propiedad 'gap' agrega espacio entre elementos dentro de un contenedor con display:flex o grid."
};

//funcion que permite agg el msj del usuario al chat

    function agregarMensaje(texto, clase) {
        const msg = document.createElement("div"); //crea un nuevo elemento
        msg.classList.add("message", clase); //asignar clases
        msg.textContent = texto; //asignar el texto al div
        messages.appendChild(msg); //agregar el mensaje al area del chat
        messages.scrollTop = messages.scrollHeight; //mandar al final del chat
        }

       //funcion que analiza lo que escribio el usuario para generar una respuesta
       function analizarMensaje(texto) {
            const textoRecibido = texto.toLowerCase(); //convierte todo a minusculas

            //buscar si el mensaje contiene una propiedad css del diccionario
            for (const propiedad in propiedadesCSS) {
                if(textoRecibido.includes(propiedad)) {
                    return propiedadesCSS[propiedad]; //Devolver la resp. Encontrada
                }
            }

            //Si no encuentra nada
            return `"${texto}" No tiene una respuesta en el diccionario CSS. Por lo tanto, no sabria responder a tu duda. Lo siento.`;
       }

      //enviar mensaje

      function enviarMensaje() {
        const texto = input.value.trim(); //obtener el texto sin espacios
        if(texto === "") return;

        agregarMensaje(texto, "user"); //mostrar el mensaje del usuario
        input.value = "";
        input.focus();
      

      //Esperar 0.5 seg antes de mostrar la respuesta del bot
      setTimeout(function () {
        const respuesta = analizarMensaje(texto); //obtener la repsuesta del bot
        agregarMensaje(respuesta, "bot");
      }, 500);
    }

//capturar eventos
    sendBtn.addEventListener("click", enviarMensaje);

    input.addEventListener("keypress", function (e) {
        if(e.key === "Enter") {
            enviarMensaje();
        }
    });
});