/*******************************************
 * HEX COLOR CHANGE
 */


//Choose a random color
const button = document.getElementById('btn');
const body = document.querySelector('body');
const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexValue = document.getElementById('hex-value');

body.style.backgroundColor = 'white';
button.addEventListener('click', changeHex);
// button.addEventListener('mouseenter', changeBackground)

function changeHex(){
    let hex = '#'

        for (let i = 0; i < 6; i++){
            const index = Math.floor(Math.random()*colors.length);
            hex += colors[index];
        }

    hexValue.textContent = hex;
    body.style.backgroundColor = hex;
}
