const d =document;

export default function contactFormValidations(){
    const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

$inputs.forEach(input =>{
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none")
    input.insertAdjacentElement("afterend", $span);


});

d.addEventListener("keyup", e =>{
    
    if (e.target.matches(".contact-form [required]")){
        let $input = e.target,

        /**El dataset.pattern es para el textarea ya que un textarea no puede validar un pattern y tiene que buscar ese pattern que le pusimos nosotros COMO UN DATASET (google that) */
        pattern = $input.pattern || $input.dataset.pattern;

        // console.log($input, pattern)
        if(pattern && $input.value != ""){
            // console.log("tiene patron")
            //*Creo una nueva exprecion regular que trae el vaalor desde pattern*//
            let regex = new RegExp(pattern)
            //Si el valor de input no cumple con la expresion regular: parte verdadera y parte falsa
            return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active")
             
        }
        if(!pattern){
// console.log("no tiene patron")
            return $input.value === ""
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active")
        }
    }



})


d.addEventListener("submit", e=>{
    e.preventDefault();
    alert("Enviando formulario")
const $loader = d.querySelector(".contact-form-loader"),
$response = d.querySelector(".contact-form-response");

$loader.classList.remove("none")
setTimeout(() => {
    $response.classList.remove("none");
    $loader.classList.add("none");
    $form.reset();


   setTimeout(() => $response.classList.add("none") , 3000);


}, 3000);


})
    

}