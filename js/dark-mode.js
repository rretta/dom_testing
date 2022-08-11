
const d = document,
ls = localStorage;

export default function darkMode(btnDark, darkMode){
   
const $btn = d.querySelector(btnDark),
$selectors = d.querySelectorAll("[dark-mode]")
   const moon = "🌙",
   sun = "☀️";



   const ltMode = ()=>{ $selectors.forEach(el => el.classList.remove("dark-mode"))
   $btn.textContent = moon

   ls.setItem("theme", "light")
}



   const dkMode = ()=>{ $selectors.forEach(el => el.classList.add("dark-mode"))
   $btn.textContent = sun

   ls.setItem("theme", "dark")
}




    d.addEventListener("click", (e) =>{
        if(e.target.matches(btnDark)){
          
           if($btn.textContent === moon){
            
           dkMode()
            
            
           } else {
           
            ltMode()

           }
           
        }
    });


    d.addEventListener("DOMContentLoaded",e =>{
 if(ls.getItem("theme") === null ) {ls.setItem("theme", "light")};
   if(ls.getItem("theme")=== "light"){
    ltMode()
   }
   if(ls.getItem("theme")=== "dark"){
    dkMode()
   }
})
}