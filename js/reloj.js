const d = document;

export function digitalClock(clock, btnPlay, btnStop){
let clockTempo;



    d.addEventListener("click", e =>{


        if (e.target.matches(btnPlay)){
            d.querySelector(clock).style.visibility = "visible";


            clockTempo =  setInterval(() => {
                let horaActual = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${horaActual}</h3>`
                
            }, 1000);
            e.target.disabled= true;
        }
        if (e.target.matches(btnStop)){
           clearInterval(clockTempo);
           d.querySelector(clock).innerHTML = null;
           d.querySelector(btnPlay).disabled = false;

        }
    })
}





export function alarm(sound, btnIniciar, btnParar){
    let alarmTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;
    

    d.addEventListener("click", e =>{


    if (e.target.matches(btnIniciar)){
      
    alarmTempo = setTimeout(() => {
           $alarm.play()


        }, 2000);
        e.target.disabled= true;
        
        }


    if (e.target.matches(btnParar)){
       clearTimeout(alarmTempo);
       $alarm.pause();
       //Pausa y regresa a 0//
       $alarm.currentTime = 0;
       d.querySelector(btnIniciar).disabled = false;
    }
    }
)}