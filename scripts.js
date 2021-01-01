const cards = document.querySelectorAll('.match-card')

function flipCard() {
    this.classList.toggle('flip')
}

cards.forEarch(card => card.addEventListener('click', flipCard))
