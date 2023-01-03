function selectedEvent() {
    let divs = document.querySelectorAll(".seat")
    divs.forEach(e => {
        e.addEventListener('click', event => {
            let data = event.target.getAttribute("data")
            let selected = document.querySelectorAll(`[data="${data}"]`)[0];

            if (selected.classList.contains('selected')) {
                selected.classList.remove('selected')
            } else if(!selected.classList.contains('occupied')) {
                selected.classList.add('selected')
            }
            calcAmount()
        })
    })
}

function renderSeat() {
    const ROW_NUMBER = 6
    const COLUMN_NUMBER = 8

    let container = document.querySelectorAll('.container')
    for (let rIndex = 0; rIndex < ROW_NUMBER;rIndex++) {
        let rowDiv = document.createElement('div')
        rowDiv.className = 'row'
        for (let cIndex = 0; cIndex < COLUMN_NUMBER; cIndex++) {
            let cDiv = document.createElement('div')
            cDiv.className = 'seat' + randomOccupied()
            cDiv.setAttribute('data', rIndex +"-"+cIndex)
            rowDiv.appendChild(cDiv)
        }
        container[0].appendChild(rowDiv)
    }
}

/**
 * 
 * @returns 
console.log(Math.random() < 0.1); //10% probability of getting true
console.log(Math.random() < 0.4); //40% probability of getting true
console.log(Math.random() < 0.5); //50% probability of getting true
console.log(Math.random() < 0.8); //80% probability of getting true
console.log(Math.random() < 0.9); //90% probability of getting true
 */
function randomOccupied() {
    return Math.random() < 0.9 ? '' : ' occupied'
}

function calcAmount() {
    let ticketPrice = document.getElementById('movie').value
    let selected = document.querySelectorAll(".selected");

    document.getElementById('number-seat').innerText = selected.length-1
    document.getElementById('total').innerText = ticketPrice*(selected.length-1)
}

renderSeat()
selectedEvent()