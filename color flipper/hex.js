const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

let hexColor = "#";

function createHex () {
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * 16)];
        console.log(hexColor);
      }
    return hexColor;  
}

btn.addEventListener('click', function(){  
    document.body.style.backgroundColor = createHex();
    color.textContent = hexColor;
    hexColor = "#";
   })