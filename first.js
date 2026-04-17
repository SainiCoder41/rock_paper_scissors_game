const image =["./image/scissor.jpg","./image/paper.png","./image/Rock.jpg"];
const value = ["scissor","paper","rock"];
const button = document.getElementById('start');
const img1 =  document.createElement('img');
const img2 = document.createElement('img');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const button2 = document.getElementById('reset');
const result  = document.getElementById('result');
const para = document.createElement('p');


button2.addEventListener('click',()=>{
    player1.removeChild(img1);
    player2.removeChild(img2);
    result.innerHTML = "";
    
    
})
function createImage(){
    const index1 = Math.floor(Math.random()*image.length);
    const index2 = Math.floor(Math.random()*image.length);
    img1.src = image[index1];
    img2.src = image[index2];
    img1.id = value[index1];
    img2.id = value[index2];
    img1.width = 200;
    img2.width = 200;
    img1.height = 200;
    img2.height = 200;
    player1.appendChild(img1);
    player2.appendChild(img2);
    result.innerHTML = ""; 

    if (img1.id === img2.id) {
        para.textContent = "Draw";
    } else if (
        (img1.id === "scissor" && img2.id === "paper") ||
        (img1.id === "paper" && img2.id === "rock") ||
        (img1.id === "rock" && img2.id === "scissor")
    ) {
        para.textContent = "Player 1 Win";
    } else {
        para.textContent = "Player 2 Win";
    }
    result.appendChild(para);

}
if(img1.src == ""&& img2.src == ""){
    button.addEventListener('click',createImage);
}

