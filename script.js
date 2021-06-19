
    var ran1 = Math.floor(Math.random()*6)+1;
    var ran2 = Math.floor(Math.random()*6)+1;
    var direccion = "images/dice";

    document.querySelector(".img1").src = direccion + ran1 + ".png";
    document.querySelector(".img2").src = direccion + ran2 + ".png";

    if(ran1 > ran2){
        document.getElementsByTagName("h1")[0].textContent = "🚩 El Jugador 1 Gana!"
    }else if(ran1 < ran2){
        document.getElementsByTagName("h1")[0].textContent = "El Jugador 2 Gana! 🚩"
    }else{
        document.getElementsByTagName("h1")[0].textContent = "Empate!"
    }

