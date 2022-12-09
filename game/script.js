let start = document.querySelector("#start")
let game = document.querySelector("#game");
let scor = 0;
let time = document.querySelector("#time");
let isGameStarted = false;
let timeHeader = document.querySelector("#time-header")
let resultHeader = document.querySelector("#result-header")

start.addEventListener("click", startGame);
game.addEventListener("click", handleBoxClick)
function startGame(){
    isGameStarted = true
    console.log("start");
    start.classList.add('hide');
    game.style.background = "#FFF"
    let interval = setInterval(function(){
        let t = time.textContent;
        if(t<=0){
            clearInterval(interval)
            endGame()
        }
        else{time.textContent = (t - 0.1).toFixed(1)}
        
    },100)

    renderBox();
}
function endGame(){
    isGameStarted = false;
    start.classList.remove('hide')
    game.style.background = "#9be8fb";
    game.innerHTML = ""
    timeHeader.classList.add('hide')
    resultHeader.classList.remove('hide')

}

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

function renderBox(){
    game.innerHTML = ""
    let box = document.createElement('div');
    let boxSize = getRandom (30, 100)
    let gameSize = game.getBoundingClientRect()
    let mapTop = gameSize.height - boxSize
    let mapleft = gameSize.width - boxSize
    box.style.width = box.style.height = boxSize + "px"
    box.style.background = "#000";
    box.style.position = "absolute"
    box.style.top = getRandom(0, mapTop) + "px"
    box.style.left = getRandom(0,mapleft) + "px"
    box.style.cursor = "pointer"
    box.setAttribute("data-box", "true")
    game.insertAdjacentElement("afterbegin", box)
}

function handleBoxClick(event){
    if(!isGameStarted){
        return
    }
   if(event.target.dataset.box){
    scor++;
    renderBox()
   }
}

// function Color() {
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     c.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
// }