const noBtn= document.querySelector('#no');
const continer=document.querySelector('.continer')

noBtn.addEventListener('click', move);
function move(){
    console.log('hello')
const maxX= continer.offsetWidth-noBtn.offsetWidth;
const maxY= continer.offsetHeight-noBtn.offsetHeight;

const newX = Math.floor(Math.random() * maxX);
const newY = Math.floor(Math.random() * maxY);
noBtn.style.left=`${newX}px`
noBtn.style.top=`${newY}px`;


}

const yesBtn = document.querySelector('#yes');

yesBtn.addEventListener('click', showConfirmation);
function showConfirmation() {
    const container = document.querySelector('.continer');
    const yesNoDiv = document.querySelector('.yes-no');
    
    const message = document.createElement('h1');
    const heart = document.createElement('div');
    
    message.textContent = "I know u will say yes, let's meet tomorrow 💖";
    message.classList.add('message');
    
    heart.classList.add('heart');

    container.classList.add('romantic-mode');
    container.innerHTML = '';
    container.appendChild(message);
    container.appendChild(heart);
}