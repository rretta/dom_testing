const d = document,
  w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
 
let newQuery = w.matchMedia(mq);

const responsive = (e) =>{
    
    
    if(!newQuery.matches){
    d.getElementById(id).innerHTML=mobileContent

} else{
    d.getElementById(id).innerHTML=desktopContent

}

}

responsive()
// newQuery.addEventListener("change", responsive)

}
