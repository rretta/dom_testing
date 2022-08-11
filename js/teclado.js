const d = document;

export function shortcuts(e) {
  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alterta con el teclado");
  }

  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmacion con el teclado");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado un aviso con el teclado");
  }
}

let x = 0;
let y = 0;


export function moveBall(e, ball, escenario) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(escenario),
    limitsBall= $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();

    //console.log(limitsBall);
    //onsole.log(limitStage);
  //console.log(e.key);
//   const move =(direction) =>{
    
//     $ball.style.transform = `translate(${x*10}px, ${y*10}px)`
//   }

  switch (e.keyCode) {
    //izquierda
    case 37:
        // move("left")
       
        if(limitsBall.left > limitStage.left) {
            e.preventDefault()
            x--
        };
      break;
    
    case 38:
        // move("up")
       
        if(limitsBall.top > limitStage.top){
            e.preventDefault();
             y--
        };
        
      break;
    case 39:
        // move("right")
        if(limitsBall.right < limitStage.right){ x++;
        e.preventDefault();}
      break;
    case 40:
        // move("down")
        
        if(limitsBall.bottom < limitStage.bottom) {
            e.preventDefault()
            y++};
    
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x*10}px, ${y*10}px)`
}
