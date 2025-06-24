/*document.addEventListener('DOMContentLoaded', function() {
    const relojDiv = document.getElementById('reloj');

    function actualizarReloj() {
        const ahora = new Date();
        const opciones = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        relojDiv.textContent = ahora.toLocaleTimeString('es-MX', opciones);
    }
     

    
    setInterval(actualizarReloj, 1000);
    actualizarReloj(); 
 });
    document.addEventListener("DOMContentLoaded", () => {

  const imagen = document.getElementById("imagenPrincipal");
  const btnCambiar = document.getElementById("btnCambiar");

  
   const imagenes =[
    "0554.png",
    "0553.png",
     ];
  let indiceActual = 0;

  // Evento onclick: cambiar imagen secuencialmente
  btnCambiar.onclick = () => {
    imagen.src = imagenes[indiceActual];
    indiceActual = (indiceActual + 1) % imagenes.length; // Avanza al siguiente índice y reinicia si llega al final
  };
  

  // Evento onload: mensaje cuando la imagen se carga
  imagen.onload = () => {
    console.log("Imagen cargada correctamente");
  };
});*/
document.addEventListener("DOMContentLoaded", () => {
    // 🕒 Reloj
    const relojDiv = document.getElementById('reloj');
    if (relojDiv) {
        function actualizarReloj() {
            const ahora = new Date();
            const opciones = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            };
           
        }

        setInterval(actualizarReloj, 1000);
        actualizarReloj();
    } else {
        console.error("No se encontró el elemento con id='reloj'");
    }

    // 🖼 Imagen y botón
    const imagen = document.getElementById("imagenPrincipal");
    const btnCambiar = document.getElementById("btnCambiar");

    const imagenes = ["0554.png", "0553.png"];
    let indiceActual = 1; // la primera imagen ya está puesta

    if (imagen && btnCambiar) {
        btnCambiar.onclick = () => {
            imagen.src = imagenes[indiceActual];
            indiceActual = (indiceActual + 1) % imagenes.length;
        };

        imagen.onload = () => {
            console.log("Imagen cargada correctamente");
        };
    } else {
        console.error("Faltan elementos: 'imagenPrincipal' o 'btnCambiar'");
    }
});