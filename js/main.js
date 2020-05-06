const main = document.getElementById('main');
let imagen = document.createElement('img');
const play = document.getElementById('play');

if(localStorage.getItem("id") === "1" ){
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
}else if(localStorage.getItem("id") === "1" ){
    main.removeChild(play);
    alert('El mensaje estuvo en tus ojos')
}
