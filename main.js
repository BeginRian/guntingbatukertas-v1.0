// Membuat Variabel Baru

const pilihan = ['Batu', 'Gunting', 'Kertas'];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const resultDisplay = document.getElementById("result");

// Membuat Function

function playgame(pilihanplayer){

    const pilihancomputer = pilihan[Math.floor(Math.random() * 3)];
    let result = "";

    if(pilihanplayer === pilihancomputer){
        result = "DRAW";
    }
    else{
        switch(pilihanplayer){
            case "Batu":
                result = (pilihancomputer  === "Gunting") ? "KAU MENANG!" : "KAU KALAH!";
                break;
            case "Kertas":
                result = (pilihancomputer  === "Batu") ? "KAU MENANG!" : "KAU KALAH!";
                break;
            case "Gunting":
                result = (pilihancomputer  === "Kertas") ? "KAU MENANG!" : "KAU KALAH!";
                break;
        }
    }

    player.textContent = `Player : ${pilihanplayer}`;
    computer.textContent = `Computer : ${pilihancomputer}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greentext","redtext");

    switch (result){
        case "KAU MENANG!" :
            resultDisplay.classList.add("greentext");
            break;
        case "KAU KALAH!":
            resultDisplay.classList.add("redtext");
            break;
    }
}
