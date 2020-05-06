const main = document.getElementById('main');
let imagen = document.createElement('img');
const play = document.getElementById('play');

play.addEventListener('click', ()=>{
    imagen.src = "img/test.png";
    imagen.classList.add("mensaje");
    main.appendChild(imagen);
    main.removeChild(play);
    localStorage.setItem("id", "1")

    setTimeout(()=>{
        main.removeChild(imagen);
    },180000);
});
