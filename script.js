let boxe = document.querySelectorAll(".box");
let Restartbtn = document.querySelector("#re-start");
let newbtn = document.querySelector(".new-button");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turn0 = true;//playerx, player0

const winpaterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () =>{
    turn0 = true;
    enablebox();
    msgcontainer.classList.add("hide");
};

boxe.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            //player0
            box.innerText = "0";
            turn0 = false;
        }
        else {
            //player x
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disablebox = () => {
    for (let box of boxe) {
        box.disabled=true;
    }
};

const enablebox = () => {
    for (let box of boxe) {
        box.disabled=false;
        box.innerText = "";
    }
};

    const showwinner = (winner) => {
        msg.innerText = `Congratulation, winner is ${
            winner}`;
        msgcontainer.classList.remove("hide");
        disablebox();
    };
    const checkwinner = () => {
        for (let pattern of winpaterns) {
            let pos1val = boxe[pattern[0]].innerText;
            let pos2val = boxe[pattern[1]].innerText;
            let pos3val = boxe[pattern[2]].innerText;

            if (pos1val != "" && pos2val != "" && pos3val != "") {
                if (pos1val === pos2val && pos2val === pos3val) {
                    showwinner(pos1val);
                }
            }
        }
    };

    newbtn.addEventListener("click", resetgame);
    Restartbtn.addEventListener("click", resetgame);

