var score = 0;
function addBola() {
    var cores = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];

    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);

    var indeCor = Math.floor(Math.random() * cores.length);

    bola.style.backgroundColor = cores[indeCor];

    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:"+cores[indeCor]);
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
    setTimeout(function () {
        remove(bola);
    }, 4000);

    intervalo = setInterval(function () {
        p2 -= 1; // Velocidade do movimento vertical (pode ser ajustada)
        bola.style.top = p2 + "px";

        if (p2 <= 0) {
            remove(bola);
            clearInterval(intervalo);
        }
    }, 5);
}
function remove(elemento){
    document.body.removeChild(elemento);
}
function estourar(elemento){
    document.body.removeChild(elemento);
    atualizarScore();
}
function atualizarScore(){
    score++;
    document.getElementById("score").textContent = "Score:" + score;
}
function criarScoreboard() {
    var scoreboard = document.createElement("div");
    scoreboard.setAttribute("class", "scoreboard");
    scoreboard.setAttribute("id", "score");
    scoreboard.textContent = "Score: 0";

    document.body.appendChild(scoreboard);
}
function iniciar(){
    criarScoreboard();
    // setInterval(addBola, 1000);

}