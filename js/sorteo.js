const d =document;


export default function pokeSorteo(id){
const $id = d.getElementById(id),
ul = d.createElement("ul"),
boton = d.createElement("button");
boton.innerText ="CATCH!"
$id.appendChild(ul)
$id.appendChild(boton)

let pokemonArray = ["bulbasaur",
                   'ivysaur',
                   'venusaur',
                   'squirtle',
                   'wartortle',
                   'blastoise',
                   'charmander',
                   'charmeleon',
                   'charizard',];

        



pokemonArray.forEach(e=>{
    var li = d.createElement('li');
    li.innerHTML =  e;
    ul.appendChild(li);
})



boton.addEventListener("click", (e) =>{
    const numeroPokemon = Math.floor(Math.random()* 9)
    alert(`Atrapaste a: ${pokemonArray[numeroPokemon]}`)
})





}



// const getWinnerComment = (selector)=>{
//     const $players = document.querySelectorAll(selector),
//     random = Math.floor(Math.random()* $players.length),
//     winner = $players[random];

//     return `El ganador es ${winner.textContent}`
// }