let homeScore = 0
let guestScore = 0

let homeScoreDisplay = document.getElementById("home-score")
let guestScoreDisplay = document.getElementById("guest-score")

function incrementHome1() {
  homeScore ++
  homeScoreDisplay.textContent = homeScore
}
function incrementHome2(){
  homeScore += 2
  homeScoreDisplay.textContent = homeScore
}
function incrementHome3(){
  homeScore += 3
  homeScoreDisplay.textContent = homeScore
}

function incrementGuest1(){
  guestScore ++
  guestScoreDisplay.textContent = guestScore
}
function incrementGuest2(){
  guestScore += 2
  guestScoreDisplay.textContent = guestScore
}
function incrementGuest3(){
  guestScore += 3
  guestScoreDisplay.textContent = guestScore
}

let seconds = 0
function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

let timerEl = document.getElementById("timer")
let timer = null

function startGame() { 
  if (!timer) {
        timer = setInterval(() => {
        seconds++
        timerEl.textContent = formatTime(seconds)
    }, 1000)
  }
}

function stopGame() {
  clearInterval(timer)
  timer = null
}

function resetGame() {
  clearInterval(timer)
  seconds = 0
  timerEl.textContent = "00:00"
  timer = null
}