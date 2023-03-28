// Define an object that maps each hiragana character to its corresponding audio file
const audioFiles = {
  'a': 'sounds/a.mp3',
  'i': 'sounds/i.mp3',
  'u': 'sounds/u.mp3',
  'e': 'sounds/e.mp3',
  'o': 'sounds/o.mp3',
  // Add more hiragana characters and audio files here
};

// Function to play a sound file for a given hiragana character
function playSound(char) {
  const audio = new Audio(audioFiles[char]);
  audio.play();
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let isDrawing = false;

canvas.addEventListener('mousedown', function(e) {
  isDrawing = true;
  draw(e);
});

canvas.addEventListener('mousemove', function(e) {
  if (isDrawing) {
    draw(e);
  }
});

canvas.addEventListener('mouseup', function() {
  isDrawing = false;
});

function draw(e) {
  const x = e.offsetX;
  const y = e.offsetY;

  context.beginPath();
  context.arc(x, y, 10, 0, 2 * Math.PI);
  context.fill();
}

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

  