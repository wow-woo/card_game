const cardArray = [
  {
    name: "ace",
    img: "https://pixel-mind.com/wp-content/uploads/2018/02/Logo_Negativo.png",
  },
  {
    name: "ramen",
    img:
      "https://stickershop.line-scdn.net/stickershop/v1/product/3254074/LINEStorePC/main.png;compress=true",
  },
  {
    name: "ace",
    img: "https://pixel-mind.com/wp-content/uploads/2018/02/Logo_Negativo.png",
  },
  {
    name: "cheese",
    img:
      "https://assets.bigcartel.com/product_images/224195596/download.png?auto=format&fit=max&h=1000&w=1000",
  },
  {
    name: "ramen",
    img:
      "https://stickershop.line-scdn.net/stickershop/v1/product/3254074/LINEStorePC/main.png;compress=true",
  },
  {
    name: "bottle",
    img:
      "https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png",
  },
  {
    name: "bottle",
    img:
      "https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png",
  },
  {
    name: "cheese",
    img:
      "https://assets.bigcartel.com/product_images/224195596/download.png?auto=format&fit=max&h=1000&w=1000",
  },
  {
    name: "pen",
    img: "https://art.pixilart.com/94f3021308b77cd.png",
  },
  {
    name: "pen",
    img: "https://art.pixilart.com/94f3021308b77cd.png",
  },
  {
    name: "water",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9kQVPnzX97ZVK-CjKMcyZcNp3TzTvalAtcQ2EWz6iUERmAzxA&usqp=CAU",
  },
  {
    name: "water",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9kQVPnzX97ZVK-CjKMcyZcNp3TzTvalAtcQ2EWz6iUERmAzxA&usqp=CAU",
  },
  {
    name: "chips",
    img: "https://art.pixilart.com/47f1ab78d271029.png",
  },
  {
    name: "chips",
    img: "https://art.pixilart.com/47f1ab78d271029.png",
  },
  {
    name: "ring",
    img:
      "https://pdpcom.scdn1.secure.raxcdn.com/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/l/n/lnk-angle_20-_20off.png",
  },
  {
    name: "ring",
    img:
      "https://pdpcom.scdn1.secure.raxcdn.com/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/l/n/lnk-angle_20-_20off.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
resultDisplay.textContent = 0;
let chosenCard_name = [];
let chosenCard_id = [];
let cardsWon = [];
const defaultSrc =
  "data:image/png;base64,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";

const done =
  "https://donotdepart.com/wp-content/uploads/2018/02/White-Background.png";

const createBoard = () => {
  cardArray.map((card_object, index) => {
    const card = document.createElement("img");
    card.setAttribute("src", defaultSrc);
    card.setAttribute("data-id", index);
    card.setAttribute("data-count", false);

    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  });
};

const checkForMatch = () => {
  let cards = document.querySelectorAll("img");

  const choice1 = chosenCard_id[0];
  const choice2 = chosenCard_id[1];

  if (chosenCard_name[0] === chosenCard_name[1]) {
    alert("success");
    cards[choice1].setAttribute("src", done);
    cards[choice2].setAttribute("src", done);

    cardsWon = [...cardsWon, choice1, choice2];
  } else {
    cards[choice1].setAttribute("src", defaultSrc);
    cards[choice2].setAttribute("src", defaultSrc);
    cards[choice1].setAttribute("data-count", false);
    cards[choice2].setAttribute("data-count", false);
  }

  chosenCard_name = [];
  chosenCard_id = [];

  resultDisplay.textContent = cardsWon.length / 2;

  if (cardsWon.length === cardArray.length) {
    resultDisplay.textContent = "Congratulations! all clear !!";
  }
};

function flipCard() {
  if (this.getAttribute("data-count") === "false") {
    this.setAttribute("data-count", true);

    const card_id = this.getAttribute("data-id");

    chosenCard_name.push(cardArray[card_id].name);
    chosenCard_id.push(card_id);

    console.log("chosenCard_name", chosenCard_name);

    this.setAttribute("src", cardArray[card_id].img);

    if (chosenCard_name.length === 2) {
      setTimeout(checkForMatch, 300);
    }
  } else {
    return;
  }
}

createBoard();

const reset_btn = document.querySelector(".reset");

const resetAll = async () => {
  const cards = document.querySelectorAll("img");
  await cards.forEach((card) => {
    grid.removeChild(card);
  });

  cardsWon = [];
  chosenCard_name = [];
  chosenCard_id = [];
  resultDisplay.textContent = 0;
  cardArray.sort(() => 0.5 - Math.random());
  createBoard();
};

reset_btn.addEventListener("click", resetAll);
