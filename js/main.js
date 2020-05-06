const main = document.getElementById('main');
let imagen = document.createElement('img');
const play = document.getElementById('play');

imagen.src = "img/test.png";
imagen.classList.add("mensaje");

if(localStorage.getItem("id") === "1"){
    main.removeChild(play);
    alert("El mensaje fue entregado...")
}else{
    play.addEventListener('click', ()=>{
        main.appendChild(imagen);
        main.removeChild(play);
        localStorage.setItem("id", "1")
        
        setTimeout(()=>{
            main.removeChild(imagen);
        },180000);
    });
}
