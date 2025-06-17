const lines = [
  "I know we’re miles apart,",
  "But my heart feels you every moment.",
  "This little website is my way to tell you,",
  "That I love you more every day.",
  "You're my favorite person in this whole world.",
  "And I can’t wait to be with you soon. 💕",
  "Until then, keep this little corner of love close. ❤️"
];

let index = 0;

function showNextLine() {
  if (index < lines.length) {
    const letterDiv = document.getElementById('letter');
    const newLine = document.createElement('p');
    newLine.textContent = lines[index];
    letterDiv.appendChild(newLine);
    index++;
  } else {
    alert("That's all for now... but there's more love coming soon! 😘");
  }
}

// Heart Animation
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  document.querySelector('.hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 500);
