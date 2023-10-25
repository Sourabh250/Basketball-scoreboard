let homeScore = 0
let guestScore = 0
let a = 10

let homeScoreEl = document.getElementById("home-score-text")
let guestScoreEl = document.getElementById("guest-score-text")
let liveTextEl = document.getElementById("live-text")
let homeTitleEl = document.getElementById("board-title-home")
let guestTitleEl = document.getElementById("board-title-guest")
let liveGameTextEl = document.getElementById("live-game-text")
let timerEl = document.getElementById("timer")

homeScoreEl.textContent = homeScore
guestScoreEl.textContent = guestScore


function addOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    upDateLiveText()
}

function addTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    upDateLiveText()
}

function addThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    upDateLiveText()
}

function addOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    upDateLiveText()
}

function addTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    upDateLiveText()
}

function addThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    upDateLiveText()
}

function reset() {
    liveGameTextEl.textContent = "Game In Progress"
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    homeScore = 0
    guestScore = 0
    homeTitleEl.style.color = "#EEEEEE"
    guestTitleEl.style.color = "#EEEEEE"
    liveTextEl.textContent = ""
    
    
    const interval = setInterval(() => {
            let minute = Math.trunc(a / 60)
            let second = a % 60
            timerEl.textContent = `${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`
            a--
            if (a < 0) {
                clearInterval(interval);
                a = 10;
                liveGameTextEl.textContent = "Game Ended"
                declareWinner()
            }
        }, 1000);
}



function upDateLiveText() {
    if (homeScore > guestScore) {
        homeTitleEl.style.color = "#FE0139"
        guestTitleEl.style.color = "#EEEEEE"
    } else if (homeScore < guestScore) {
        guestTitleEl.style.color = "#FE0139"
        homeTitleEl.style.color = "#EEEEEE"
    } else {
        homeTitleEl.style.color = "#EEEEEE"
        guestTitleEl.style.color = "#EEEEEE"
    }
}   

function declareWinner() {
    if (homeScore > guestScore) {
        liveTextEl.textContent = "Player One is the Winner"
    } else if (homeScore < guestScore) {
        liveTextEl.textContent = "Guest is the Winner"
    } else {
        liveTextEl.textContent = "Its a Draw!!!"
    }
}
