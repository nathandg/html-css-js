const A = document.querySelectorAll(".box");
const vez = document.querySelector(".vez");
const time = document.querySelector(".time");
const main = document.querySelector(".main");
const placar = document.querySelector(".pontos")
const button = document.querySelector(".button");

let jogador = 1;
let block = [0, 0, 0, 0, 0, 0, 0, 0, 0];
vez.textContent = "Jogador 1";
let segundos = 60;
let rodada = 0;
let pontuacao = [0, 0];
let interval;

const contador = () => {

    clearInterval(interval);
    interval = setInterval(() => {
        segundos--;
        
        if (segundos == 0) {
            alert('O tempo acabou');
            switch (jogador) {
                case 1:
                    jogador = 2;
                    break;
                case 2:
                    jogador = 1;
                    break;
                default:
                    break;
            }

            vez.textContent = "Jogador " + jogador;
            segundos = 60;
        }

        time.textContent = "Tempo: " + segundos;
    }, 1000);
    iniciou = true;
    
}

contador();

button.onclick = () => {
    pontuacao = [0, 0];
    placar.textContent = pontuacao[0] + " X " + pontuacao[1];
    segundos = 60;
}

const limpar = () => {

    for (let i = 0; i < A.length; i++) {
        A[i].innerHTML = "";
        block[i] = 0;
    }
    contador();
    segundos = 60;
    jogador = 1;
    rodada = 0;
    vez.textContent = "Jogador 1";

}

const verificaGanhador = (jogador) => {

    if (block[0] == jogador && block[1] == jogador && block[2] == jogador) {
        alert("Jogador " + jogador + " ganhou");
        pontuacao[jogador - 1]++;
        placar.textContent = pontuacao[0] + " X " + pontuacao[1];
        limpar();
    } else if (block[3] == jogador && block[4] == jogador && block[5] == jogador) {
        alert("Jogador " + jogador + " ganhou");
        pontuacao[jogador - 1]++;
        placar.textContent = pontuacao[0] + " X " + pontuacao[1];
        limpar();
    } else if (block[6] == jogador && block[7] == jogador && block[8] == jogador) {
        alert("Jogador " + jogador + " ganhou");
        pontuacao[jogador - 1]++;
        placar.textContent = pontuacao[0] + " X " + pontuacao[1];
        limpar();
    } else if (block[0] == jogador && block[3] == jogador && block[6] == jogador) {
        alert("Jogador " + jogador + " ganhou");
        pontuacao[jogador - 1]++;
        placar.textContent = pontuacao[0] + " X " + pontuacao[1];
        limpar();
    } else if (block[1] == jogador && block[4] == jogador && block[7] == jogador) {
        alert("Jogador " + jogador + " ganhou");
        pontuacao[jogador - 1]++;
        placar.textContent = pontuacao[0] + " X " + pontuacao[1];
        limpar();
    } else if (block[2] == jogador && block[5] == jogador && block[8] == jogador) {
        alert("Jogador " + jogador + " ganhou");
        pontuacao[jogador - 1]++;
        placar.textContent = pontuacao[0] + " X " + pontuacao[1];
        limpar();
    } else if (block[0] == jogador && block[4] == jogador && block[8] == jogador) {
        alert("Jogador " + jogador + " ganhou");
        pontuacao[jogador - 1]++;
        placar.textContent = pontuacao[0] + " X " + pontuacao[1];
        limpar();
    } else if (block[2] == jogador && block[4] == jogador && block[6] == jogador) {
        alert("Jogador " + jogador + " ganhou");
        pontuacao[jogador - 1]++;
        placar.textContent = pontuacao[0] + " X " + pontuacao[1];
        limpar();
    } else if (rodada == 8) {
        alert("Empate");
        limpar();
    }
    rodada++;

}

    A[0].onclick = () => {
        contador();
        segundos = 60;
        if (jogador == 1 && block[0] <= 0) {
            A[0].innerHTML = "<p>X</p>";
            block[0] = 1;
            verificaGanhador(jogador);
            jogador = 2;
            A[0].classList.add("jogador-1");
            A[0].classList.remove("jogador-2");
            vez.textContent = "Jogador 2";
        } else if (jogador == 2 && block[0] <= 0) {
            A[0].innerHTML = "<p>O</p>";
            jogador = 1;
            vez.textContent = "Jogador 1";
            block[0] = 2;
        }
    };

    A[1].onclick = () => {
        segundos = 60;
        if (jogador == 1 && block[1] <= 0) {
            A[1].innerHTML = "<p>X</p>";
            block[1] = 1;
            verificaGanhador(jogador);
            jogador = 2;
            A[1].classList.add("jogador-1");
            A[1].classList.remove("jogador-2");
            vez.textContent = "Jogador 2";
        } else if (jogador == 2 && block[1] <= 0) {
            A[1].innerHTML = "<p>O</p>";
            block[1] = 2;
            verificaGanhador(jogador);
            jogador = 1;
            vez.textContent = "Jogador 1";
        }
    };

    A[2].onclick = () => {
        segundos = 60;
        if (jogador == 1 && block[2] <= 0) {
            A[2].innerHTML = "<p>X</p>";
            block[2] = 1;
            verificaGanhador(jogador);
            jogador = 2;
            A[2].classList.add("jogador-1");
            A[2].classList.remove("jogador-2");
            vez.textContent = "Jogador 2";
        } else if (jogador == 2 && block[2] <= 0) {
            A[2].innerHTML = "<p>O</p>";
            block[2] = 2;
            verificaGanhador(jogador);
            jogador = 1;
            vez.textContent = "Jogador 1";
        }
    }


    A[3].onclick = () => {
        segundos = 60;
        if (jogador == 1 && block[3] <= 0) {
            A[3].innerHTML = "<p>X</p>";
            block[3] = 1;
            verificaGanhador(jogador);
            jogador = 2;
            A[3].classList.add("jogador-1");
            A[3].classList.remove("jogador-2");
            vez.textContent = "Jogador 2";
        } else if (jogador == 2 && block[3] <= 0) {
            A[3].innerHTML = "<p>O</p>";
            block[3] = 2;
            verificaGanhador(jogador);
            jogador = 1;
            vez.textContent = "Jogador 1";
        }
    }

    A[4].onclick = () => {
        segundos = 60;
        if (jogador == 1 && block[4] <= 0) {
            A[4].innerHTML = "<p>X</p>";
            block[4] = 1;
            verificaGanhador(jogador);
            jogador = 2;
            A[4].classList.add("jogador-1");
            A[4].classList.remove("jogador-2");
            vez.textContent = "Jogador 2";
        } else if (jogador == 2 && block[4] <= 0) {
            A[4].innerHTML = "<p>O</p>";
            block[4] = 2;
            verificaGanhador(jogador);
            jogador = 1;
            vez.textContent = "Jogador 1";
        }
    }


    A[5].onclick = () => {
        segundos = 60;
        if (jogador == 1 && block[5] <= 0) {
            A[5].innerHTML = "<p>X</p>";
            block[5] = 1;
            verificaGanhador(jogador);
            jogador = 2;
            A[5].classList.add("jogador-1");
            A[5].classList.remove("jogador-2");
            vez.textContent = "Jogador 2";
        } else if (jogador == 2 && block[5] <= 0) {
            A[5].innerHTML = "<p>O</p>";
            block[5] = 2;
            verificaGanhador(jogador);
            jogador = 1;
            vez.textContent = "Jogador 1";
        }
    }

    A[6].onclick = () => {
        segundos = 60;
        if (jogador == 1 && block[6] <= 0) {
            A[6].innerHTML = "<p>X</p>";
            block[6] = 1;
            verificaGanhador(jogador);
            jogador = 2;
            A[6].classList.add("jogador-1");
            A[6].classList.remove("jogador-2");
            vez.textContent = "Jogador 2";
        } else if (jogador == 2 && block[6] <= 0) {
            A[6].innerHTML = "<p>O</p>";
            block[6] = 2;
            verificaGanhador(jogador);
            jogador = 1;
            vez.textContent = "Jogador 1";
        }
    }


    A[7].onclick = () => {
        segundos = 60;
        if (jogador == 1 && block[7] <= 0) {
            A[7].innerHTML = "<p>X</p>";
            block[7] = 1;
            verificaGanhador(jogador);
            jogador = 2;
            A[7].classList.add("jogador-1");
            A[7].classList.remove("jogador-2");
            vez.textContent = "Jogador 2";
        } else if (jogador == 2 && block[7] <= 0) {
            A[7].innerHTML = "<p>O</p>";
            block[7] = 2;
            verificaGanhador(jogador);
            jogador = 1;
            vez.textContent = "Jogador 1";
        }
    }

    A[8].onclick = () => {
        segundos = 60;
        if (jogador == 1 && block[8] <= 0) {
            A[8].innerHTML = "<p>X</p>";
            block[8] = 1;
            verificaGanhador(jogador);
            jogador = 2;
            A[8].classList.add("jogador-1");
            A[8].classList.remove("jogador-2");
            vez.textContent = "Jogador 2";
        } else if (jogador == 2 && block[8] <= 0) {
            A[8].innerHTML = "<p>O</p>";
            block[8] = 2;
            verificaGanhador(jogador);
            jogador = 1;
            vez.textContent = "Jogador 1";
        }
    }
