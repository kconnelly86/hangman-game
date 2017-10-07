// Create an array of 15 words. Have a button in your HTML that, 
// on click, will randomly have a word appear on the screen. 
// Then, attach a picture to a word. 
// So a word and picture will both appear on the screen.
// Atattch the button to an operation that makes the random word 

//list to pull from
var word = ["swimmy", "samson", "swammy", "burgers", "baboons", "footballs", "tennis", "tigers",
 "buzzing", "node", "javascript", "education",  "firehose", "overthink", "beating"];

var img = ["https://goo.gl/UZVUHu", "https://goo.gl/rg9iqv", "https://goo.gl/VCa3tM", "https://goo.gl/MBMb2t", 
"https://goo.gl/tfB7ji", "https://goo.gl/HdGa1v", "https://goo.gl/dBDitu", "https://goo.gl/kZny8o", "https://goo.gl/Qo4Gb5",
 "https://goo.gl/cT5VBi", "https://goo.gl/95KNtU", "https://goo.gl/RH9dzX", "https://goo.gl/64atmT", "https://goo.gl/CKG4XQ",
  "https://goo.gl/aeXaYa"];

//this makes the button work onclick
document.getElementById("buttonHolder").onclick = function(){
var index = Math.floor(Math.random() * word.length)	
//this function pulls from the list of words.
var words = word[index];
var html = '<img id="img" src="' + img[index] +'">';

//this innerHTML puts the random word on the screen
document.getElementById("random-word").innerHTML = words;
document.getElementById('random-img').innerHTML = html;
}
//changes the color of the background
function changeBackground(color) {
   document.body.style.background = color;
}



// var colour = ["Pictures/red.jpg", "Pictures/green.jpg", "Pictures/amber.jpg"];

// function nxt() {
// document.getElementById("hel").innerHTML = "helllll";

// document.getElementById("color").src = colour[0];
// }
// <img id="color" src="Pictures/green.jpg" >

//     <p id="hel">he</p>

//     <button onclick="nxt()">new colour</button>



























