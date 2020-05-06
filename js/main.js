const main = document.getElementById('main');
const imagen = document.createElement('img');
const play = document.getElementById('play');



play.addEventListener('click', ()=>{
    imagen.src = "../img/jesus-es-el-vergatario.png";
    imagen.setAttribute("id","test");
    main.appendChild(imagen);

    setTimeout(()=>{
        main.removeChild(imagen);
        console.log("perdiste")
    },60000);
});