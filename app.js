const body = document.querySelector('body');
const colourBtn = document.querySelector('.colourBtn');

const colours = ['red', 'green', 'yellow', 'blue'];

colourBtn.addEventListener('click', getColour);

function getColour (){
    const random = Math.floor(Math.random()*colours.length);
    body.style.backgroundColor = colours[random];
}