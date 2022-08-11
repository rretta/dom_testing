import hamburgerMenu from "./menu_hamburguesa.js";
import {alarm, digitalClock} from "./reloj.js"
import {shortcuts, moveBall} from "./teclado.js"
import botonScroll from "./boton-scroll.js";
import darkMode from "./dark-mode.js";
import responsiveMedia from "./responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilter from "./filtros_busqueda.js";
import pokeSorteo from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulario.js";


const d = document;


d.addEventListener("DOMContentLoaded", e=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    botonScroll(".goup-btn");
    responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://youtu.be/QyWRb-dve1Y">PIPO</a>`, `<iframe class="video-responsive" width="560" height="315" src="https://www.youtube.com/embed/QyWRb-dve1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);



    responsiveMedia("gmaps", "(min-width: 1024px)",`<a href="https://goo.gl/maps/VcqyCj2FFtk23z7c6">Google - Alto Palermo</a>`, 
    `<iframe class="mapa-responsive" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13138.505227413154!2d-58.410757!3d-34.588321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc7a941fe0d021ba0!2sAlto%20Palermo%20Shopping!5e0!3m2!1ses!2sar!4v1659770930288!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" title="Alto Palermo" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    // userDeviceInfo("responsive-tester")
    userDeviceInfo("user-device");
    getGeolocation("geolocation");
    searchFilter(".card-filter",".card");
pokeSorteo("sorteo");
slider();
scrollSpy();
smartVideo();
contactFormValidations()
})


d.addEventListener("keydown", e =>{
    
    shortcuts(e);
    moveBall(e,".pelota",".contenedor");
    
})

darkMode(".dark-btn", "night")




