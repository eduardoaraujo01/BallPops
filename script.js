var totalScore = 0;
function addBola(i) {
    const bolas = [
        {
            color: "#FF0000",
            score: 1,
            time: 25,
        },
        {
            color: "#00FF00",
            score: 2,
            time: 20,
        },
        {
            color: "#0000FF",
            score: 3,
            time: 15,
        },
        {
            color: "#FFFF00",
            score: 4,
            time: 10,
        },
        {
            color: "#FF00FF",
            score: 5,
            time: 5,
        },
        {
            color: "#00FFFF",
            score: 6,
            time: 1,
        },
    ];

    const index = Math.floor(Math.random() * bolas.length);
    const bola = bolas[index]

    const bolaDiv = document.createElement("div");
    bolaDiv.setAttribute("class", "bola");

    let width = Math.floor(Math.random() * window.innerWidth - 50);
    let height = window.innerHeight;

    if (width < 5) {
        width = 5;
    }

    bolaDiv.id = `${width}-${height}-${index}-${i}`;
    bolaDiv.style.backgroundColor = bola.color;
    bolaDiv.style.left = `${width}px`;
    bolaDiv.style.top = `${height}px`;

    document.body.appendChild(bolaDiv);

    const intervalo = setInterval(function () {
        height -= 1; // Velocidade do movimento vertical (pode ser ajustada)
        bolaDiv.style.top = height + "px";

        if (height === 0) {
            remove(bolaDiv, intervalo);
        }
    }, bola.time);

    bolaDiv.addEventListener("click", (event) => estourar(bolaDiv, bola, intervalo));
}
function remove(elemento, intervalo){
    if (elemento) {
        clearInterval(intervalo);
        window.document.body.removeChild(elemento);
    }
}
function estourar(elemento, bola, intervalo){
    if (elemento) {
        remove(elemento, intervalo);
        atualizarScore(bola.score);
    }
}
function atualizarScore(score){
    totalScore += score;
    document.getElementById("score").textContent = "Score:" + totalScore;
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
    let index = 0;
    setInterval(() => {
        index++;
        addBola(index)
    }, 1000);
}
