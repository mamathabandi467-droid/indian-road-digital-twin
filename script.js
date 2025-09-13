// script.js

// Message in console
console.log("Website Loaded Successfully ✅");

// Example: run when page loads
window.onload = function() {
  console.log("Welcome to Indian Road Digital Twin!");
};
const canvas = document.getElementById('roundabout');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const cars = 10;
  let angle = [];

  for (let i = 0; i < cars; i++) {
    angle.push((i * 2 * Math.PI) / cars);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw center circle (roundabout)
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, 2 * Math.PI);
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 4;
    ctx.stroke();

    // draw cars
    for (let i = 0; i < cars; i++) {
      const x = 200 + 100 * Math.cos(angle[i]);
      const y = 200 + 100 * Math.sin(angle[i]);
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, 2 * Math.PI);
      ctx.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16); // random color
      ctx.fill();

      angle[i] += 0.02; // speed
    }

    requestAnimationFrame(draw);
  }

  draw();
}
const canvas = document.getElementById('roundabout');

if (canvas) {
  const ctx = canvas.getContext('2d');
  const cars = 10;
  const radius = 140;
  let angles = [];

  for (let i = 0; i < cars; i++) {
    angles.push((i * 2 * Math.PI) / cars);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // roundabout circle
    ctx.beginPath();
    ctx.arc(200, 200, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 3;
    ctx.stroke();

    // draw cars
    for (let i = 0; i < cars; i++) {
      const x = 200 + radius * Math.cos(angles[i]);
      const y = 200 + radius * Math.sin(angles[i]);

      ctx.beginPath();
      ctx.arc(x, y, 6, 0, 2 * Math.PI);
      ctx.fillStyle = 'red';
      ctx.fill();

      angles[i] += 0.02; // movement speed
    }

    requestAnimationFrame(draw);
  }

  draw();
}


