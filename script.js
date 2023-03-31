// Define an object that maps each hiragana character to its corresponding audio file
const audioFiles = {
  'a': 'sounds/a.mp3',
  'i': 'sounds/i.mp3',
  'u': 'sounds/u.mp3',
  'e': 'sounds/e.mp3',
  'o': 'sounds/o.mp3',
  'ka': 'sounds/ka.mp3',
  'ki': 'sounds/ki.mp3',
  'ku': 'sounds/ku.mp3',
  'ke': 'sounds/ke.mp3',
  'ko': 'sounds/ko.mp3',
  'sa': 'sounds/sa.mp3',
  'shi': 'sounds/shi.mp3',
  'su': 'sounds/su.mp3',
  'se': 'sounds/se.mp3',
  'so': 'sounds/so.mp3',
  'ta': 'sounds/ta.mp3',
  'chi': 'sounds/chi.mp3',
  'tsu': 'sounds/tsu.mp3',
  'te': 'sounds/te.mp3',
  'to': 'sounds/to.mp3',
  'na': 'sounds/na.mp3',
  'ni': 'sounds/ni.mp3',
  'nu': 'sounds/nu.mp3',
  'ne': 'sounds/ne.mp3',
  'no': 'sounds/no.mp3',
  'ha': 'sounds/ha.mp3',
  'hi': 'sounds/hi.mp3',
  'fu': 'sounds/fu.mp3',
  'he': 'sounds/he.mp3',
  'ho': 'sounds/ho.mp3',
  'ma': 'sounds/ma.mp3',
  'mi': 'sounds/mi.mp3',
  'mu': 'sounds/mu.mp3',
  'me': 'sounds/me.mp3',
  'mo': 'sounds/mo.mp3',
  'ya': 'sounds/ya.mp3',
  'yu': 'sounds/yu.mp3',
  'yo': 'sounds/yo.mp3',
  'ra': 'sounds/ra.mp3',
  'ri': 'sounds/ri.mp3',
  'ru': 'sounds/ru.mp3',
  're': 'sounds/re.mp3',
  'ro': 'sounds/ro.mp3',
  'wa': 'sounds/wa.mp3',
  'wo': 'sounds/wo.mp3',
  'n': 'sounds/n.mp3',
  // Add more hiragana characters and audio files here
};

console.log("Japanese learning website")

// Function to play a sound file for a given hiragana character
function playSound(char) {
  const audio = new Audio(audioFiles[char]);
  audio.play();

}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let isDrawing = false;

canvas.addEventListener('mousedown', function (e) {
  isDrawing = true;
  draw(e);
});

canvas.addEventListener('mousemove', function (e) {
  if (isDrawing) {
    draw(e);
  }
});

canvas.addEventListener('mouseup', function () {
  isDrawing = false;
});

function draw(e) {
  const x = e.offsetX;
  const y = e.offsetY;

  context.beginPath();
  context.arc(x, y, 10, 0, 2 * Math.PI);
  context.fill();
}

const clearButton = document.getElementById('clearbutton');
clearButton.addEventListener('click', function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
});







var clearbutton = document.getElementById('clearbutton');
  var popupOverlay = document.createElement('div');
  var popupMessage = document.createElement('div');

  popupOverlay.className = 'popup-overlay';
  popupMessage.className = 'popup-message';
  popupMessage.innerHTML = 'Clearing the canvas is successful';

  clearbutton.addEventListener('click', function() {
    // Add the popup overlay and message to the document body
    document.body.appendChild(popupOverlay);
    popupOverlay.appendChild(popupMessage);

    // Show the popup overlay
    popupOverlay.style.display = 'flex';

    // Hide the popup overlay and message after 2 seconds
    setTimeout(function() {
      popupOverlay.style.display = 'none';
      popupOverlay.removeChild(popupMessage);
    }, 500);
  });