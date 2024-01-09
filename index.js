let boxes =document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGamebtn =document.querySelector("#newbtn");
let msgContainer= document.querySelector(".msg-container")
let msg= document.querySelector("#msg");
let button = document.querySelectorAll("button");

let trunO=true; // Player O //-->false->PlayerX-

const WinPatterens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    trunO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log(" Clicked");
        if (trunO) {
            box.innerText="O";
            trunO=false;
        }
        else{
            box.innerText="X";
            trunO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled =true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText = "";
    }
};

const showWinner=(winner)=>{
    msg.innerText=Player ${winner} is winner;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of WinPatterens){
            let posVa1=boxes[pattern[0]].innerText;
            let posVa2=boxes[pattern[1]].innerText;
            let posVa3=boxes[pattern[2]].innerText;
             if(posVa1!="" && posVa2!="" && posVa3!=""){
                if(posVa1===posVa2 && posVa2===posVa3){
                    console.log("Winner",posVa1);
                    showWinner(posVa1);
                }
            }
    }
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);