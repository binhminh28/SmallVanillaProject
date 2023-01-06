const words = ['software', 'development']
const correctLetters = []
const wrongLetters = []

let randomWord = words[Math.floor(Math.random() * words.length)]

function displayWord() {
    let wordDiv = document.getElementById('word')
    let letters = randomWord.split("")

    wordDiv.innerHTML = ''
    for (let i = 0; i < letters.length; i++) {
        let letterDiv = document.createElement('div')
        letterDiv.className = 'letter'
        if (correctLetters.includes(letters[i])) {
            letterDiv.innerHTML = letters[i]
        }

        wordDiv.appendChild(letterDiv)
    }

    if (isCompleted()) {
        showDisplayNotification()
    }
}

function eventKeydown() {
    window.addEventListener('keydown', e => {
        if (e.keyCode >= 65 && e.keyCode <= 90) {
            if (checkDuplicate(e.key)) {
                let notificationDiv = document.getElementById('notification-container')
                notificationDiv.classList.add('show')
                setTimeout(() => {
                    notificationDiv.classList.remove('show')
                }, 2000);
                return
            }
            if ([...randomWord].includes(e.key)) {
                correctLetters.push(e.key);
                displayWord()
            } else {
                if (wrongLetters.indexOf(e.key) === -1) {
                    wrongLetters.push(e.key)
                    displayWrongLetters()
                }
            }
        }
    })
}

function isCompleted() {
    let currentLetters = document.querySelectorAll('.letter')
    let count = 0
    currentLetters.forEach(e => {
        if (e.innerHTML.trim() !== "") {
            count++
        }
    });
    return count === randomWord.length
}

function countNumberOfLetter(str) {
    return [...str].reduce((s, e) => { s[e] = s[e] ? s[e] + 1 : 1; return s }, {})
}

function addWrongLetters(str) {
    wrongLetters.push(str)
}

function checkDuplicate(letter) {
    let arr = wrongLetters.concat(correctLetters)
    return arr.some(e => e === letter)
}

function displayWrongLetters() {
    let wrongLettersDiv = document.getElementById('wrong-letters')
    wrongLettersDiv.innerHTML = wrongLetters.join()
    showFigurePart()
}

function showDisplayNotification() {
    let notiDiv = document.getElementById('popup-container')
    notiDiv.style.display = 'block'
}

function gameoverNotification() {
    let notiDiv = document.getElementById('final-message')
    notiDiv.innerHTML = "Game Over 🙄"
    showDisplayNotification()
}

function showFigurePart() {
    const figurePart = Object.freeze({
        HEAD: document.getElementById('head'),
        L_EYE: document.getElementById('left-eye'),
        R_EYE: document.getElementById('right-eye'),
        BODY: document.getElementById('body'),
        L_ARM: document.getElementById('left-arm'),
        R_ARM: document.getElementById('right-arm'),
        L_LEG: document.getElementById('left-leg'),
        R_LEG: document.getElementById('right-leg')
    });
    switch (wrongLetters.length) {
        case 1:
            figurePart.HEAD.style.display = 'block'
            break;
        case 2:
            figurePart.BODY.style.display = 'block'
            break;
        case 3:
            figurePart.L_ARM.style.display = 'block'
            figurePart.R_ARM.style.display = 'block'
            break;
        case 4:
            figurePart.L_LEG.style.display = 'block'
            figurePart.R_LEG.style.display = 'block'
            break;
        case 5:
            figurePart.L_EYE.style.display = 'block'
            figurePart.R_EYE.style.display = 'block'
            gameoverNotification()
            break;
        default:
            break;
    }
}

eventKeydown()
displayWord()