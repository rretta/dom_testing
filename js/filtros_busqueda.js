const d = document;

export default function searchFilter(input, selector) {
  d.addEventListener("keyup", (e) => {
    let $tecla = e.key;


    if(e.key === "Escape")e.target.value= "";
    

    if (e.target.matches(input)) {
      d.querySelectorAll(selector).forEach((elemento) =>
        elemento.textContent.toLowerCase().includes(e.target.value)
          ? elemento.classList.remove("ocultar")
          : elemento.classList.add("ocultar")
      );

      /*Evaluo si dentro del textcontent  de las tarjetas incluye(includes) el valor que se le ingresa como contenido a card-filter, osea el elemento disparador de busqueda
      si es que si remueve la clase ocultar que le da "display: none" al elemento
      si es que no le agrega esta clase
      */
    }
  });
}
