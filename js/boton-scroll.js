const d = document;
export default function botonScroll(boton){
    



    window.onscroll = function() {
        if(window.scrollY > 200){
            d.querySelector(boton).setAttribute("style", "display: inline;")
        }else{
            d.querySelector(boton).setAttribute("style", "display: none")
            d.querySelector(boton).classList.toggle("activo")
        }
     
    }


    d.addEventListener("click", (e) =>{
        if(e.target.matches(boton)){
            window.scrollTo(0, document.querySelector(boton).scrollTo);
        }
    }

   




    

    
)}