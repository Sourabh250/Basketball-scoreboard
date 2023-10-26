const Score = {
    Home:  0,
    Guest: 0
}

let timerDuration = 10
const secondsInMinute = 60
let interval

const homeScoreEl = document.getElementById("home-score-text")
const guestScoreEl = document.getElementById("guest-score-text")
const liveTextEl = document.getElementById("live-text")
const homeTitleEl = document.getElementById("board-title-home")
const guestTitleEl = document.getElementById("board-title-guest")
const liveGameTextEl = document.getElementById("live-game-text")
const timerEl = document.getElementById("timer")

homeScoreEl.textContent = Score.Home
guestScoreEl.textContent = Score.Guest


// function addHome(points) {
//     homeScore += points
//     homeScoreEl.textContent = homeScore
//     upDateLiveText()
// }

// function addGuest(points) {
//     guestScore += points
//     guestScoreEl.textContent = guestScore
//     upDateLiveText()
// }

//Modified to a single function

function add(points, place) {
    Score[place] += points
    const scoreEl = document.getElementById(`${place.toLowerCase()}-score-text`)
    scoreEl.textContent = Score[place]
    upDateLiveText()
}

function reset() {
    if (!interval) {
        liveGameTextEl.textContent = "Game In Progress"
        Score.Home = 0
        Score.Guest = 0
        homeScoreEl.textContent = Score.Home
        guestScoreEl.textContent = Score.Guest
        homeTitleEl.style.color = "#EEEEEE"
        guestTitleEl.style.color = "#EEEEEE"
        liveTextEl.textContent = ""
        
        
        interval = setInterval(() => {
                let minute = Math.trunc(timerDuration / secondsInMinute)
                let second = timerDuration % secondsInMinute
                timerEl.textContent = `${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`
                timerDuration--
                if (timerDuration < 0) {
                    clearInterval(interval);
                    interval = null
                    timerDuration = 10;
                    liveGameTextEl.textContent = "Game Ended"
                    declareWinner()
                }
            }, 1000);
    } else {
        liveTextEl.textContent = "Cant Reset During Ongoing Gameplay"
    }
}



function upDateLiveText() {
    if (Score.Home > Score.Guest) {
        homeTitleEl.style.color = "#F94F6D"
        guestTitleEl.style.color = "#EEEEEE"
    } else if (Score.Home < Score.Guest) {
        guestTitleEl.style.color = "#F94F6D"
        homeTitleEl.style.color = "#EEEEEE"
    } else {
        homeTitleEl.style.color = "#EEEEEE"
        guestTitleEl.style.color = "#EEEEEE"
    }
}   

function declareWinner() {
    if (Score.Home > Score.Guest) {
        liveTextEl.textContent = "Player One is the Winner"
    } else if (Score.Home < Score.Guest) {
        liveTextEl.textContent = "Guest is the Winner"
    } else {
        liveTextEl.textContent = "Its a Draw!!!"
    }
}
