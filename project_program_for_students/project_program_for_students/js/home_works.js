const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9_%+-]+@([a-z]gmail.com)$/;
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

// let counter = 0
// function moveBlock() {
//     const child = document.querySelector('.child_block')
//     child.style.left = `${counter}px`
//     counter++
//     if (counter <= 450){
//         requestAnimationFrame(moveBlock )
//     }
// }
// moveBlock()
// console.log(`${counter}px`)

const childBlock= document.querySelector('.child_block')

let positionX =0
let positionY =0
const moveBlock = () => {
    if (positionX <448 && positionY <= 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 1)
        }else if (positionX >=448 && positionY < 448) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 1)
        }else if (positionX > 0 && positionY >= 448) {
        positionX--
        childBlock.style.left =`${positionX}px`
        setTimeout(moveBlock,1)
    }else if (positionX >= 0 && positionY > 0) {
        positionY--
        childBlock.style.top =`${positionY}px`
        setTimeout(moveBlock,1)
    }
}

moveBlock()

const time = document.querySelector("#secondsS")
const timeBtn = document.querySelector("#start")
const timeStp = document.querySelector("#stop")
const timeRes = document.querySelector("#reset")

let count = 0;
let int;

time.innerHTML = count;
timeBtn.addEventListener("click", () => {
    if (!int) {
        int = setInterval(() => {
            count += 1;
            time.innerHTML = count;
        }, 1000);
        timeBtn.disabled = true;
        timeStp.disabled = false;
        timeRes.disabled = false;
    }
});
timeStp.addEventListener('click', () => {
    clearInterval(int);
    int = null;
    timeBtn.disabled = false;
    timeStp.disabled = true;
    timeRes.disabled = false;
});
timeRes.addEventListener('click', () => {
    count = 0;
    clearInterval(int);
    int = null;
    time.innerHTML = count;
    timeBtn.disabled = false;
    timeStp.disabled = true;
    timeRes.disabled = true;
});



