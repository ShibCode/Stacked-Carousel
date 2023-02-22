let cards = [...document.querySelectorAll(".card")];

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

function next() {
  const newCards = [];

  for (let i = 1; i <= cards.length - 1; i++) {
    newCards.push(cards[i]);
  }
  newCards.push(cards[0]);

  updateClass(newCards);

  cards = newCards;
}

function prev() {
  const newCards = [];

  newCards.push(cards[cards.length - 1]);

  for (let i = 0; i <= cards.length - 2; i++) {
    newCards.push(cards[i]);
  }

  setTimeout(() => {
    updateClass(newCards);
  }, 250);

  cards = newCards;
}

function updateClass(cards) {
  cards.forEach((card, index) => {
    card.classList = "card";
    if (index === 0) card.classList.add("focused");
    if (index === 1) card.classList.add("unfocused-right");
    if (index === cards.length - 1) card.classList.add("unfocused-left");
  });
}
