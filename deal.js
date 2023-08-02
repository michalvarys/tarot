//Tarot Card App

//MODULE 1: Declarations

//create new object with cards
var cards = new Array();

//create variables to limit cards dealt to 7 & to test in console
var cardsLeftToDeal = 30;
var cardsDealt = 0;

const decks = {
  common: {
    cards: [
      "00_Fool",
      "01_Magician",
      "02_High_Priestess",
      "03_Empress",
      "04_Emperor",
      "05_Hierophant",
      "06_Lovers",
      "07_Chariot",
      "08_Strength",
      "09_Hermit",
      "10_Wheel_of_Fortune",
      "11_Justice",
      "12_Hanged_Man",
      "13_Death",
      "14_Temperance",
      "15_Devil",
      "16_Tower",
      "17_Star",
      "18_Moon",
      "19_Sun",
      "20_Judgement",
      "21_World",
      "22_Ace_of_Wands",
      "23_Two_of_Wands",
      "24_Three_of_Wands",
      "25_Four_of_Wands",
      "26_Five_of_Wands",
      "27_Six_of_Wands",
      "28_Seven_of_Wands",
      "29_Eight_of_Wands",
      "30_Nine_of_Wands",
      "31_Ten_of_Wands",
      "32_Page_of_Wands",
      "33_Knight_of_Wands",
      "34_Queen_of_Wands",
      "35_King_of_Wands",
      "36_Ace_of_Pentacles",
      "37_Two_of_Pentacles",
      "38_Three_of_Pentacles",
      "39_Four_of_Pentacles",
      "40_Five_of_Pentacles",
      "41_Six_of_Pentacles",
      "42_Seven_of_Pentacles",
      "43_Eight_of_Pentacles",
      "44_Nine_of_Pentacles",
      "45_Ten_of_Pentacles",
      "46_Page_of_Pentacles",
      "47_Knight_of_Pentacles",
      "48_Queen_of_Pentacles",
      "49_King_of_Pentacles",
      "50_Ace_of_Cups",
      "51_Two_of_Cups",
      "52_Three_of_Cups",
      "53_Four_of_Cups",
      "54_Five_of_Cups",
      "55_Six_of_Cups",
      "56_Seven_of_Cups",
      "57_Eight_of_Cups",
      "58_Nine_of_Cups",
      "59_Ten_of_Cups",
      "60_Page_of_Cups",
      "61_Knight_of_Cups",
      "62_Queen_of_Cups",
      "63_King_of_Cups",
      "64_Ace_of_Swords",
      "65_Two_of_Swords",
      "66_Three_of_Swords",
      "67_Four_of_Swords",
      "68_Five_of_Swords",
      "69_Six_of_Swords",
      "70_Seven_of_Swords",
      "71_Eight_of_Swords",
      "72_Nine_of_Swords",
      "73_Ten_of_Swords",
      "74_Page_of_Swords",
      "75_Knight_of_Swords",
      "76_Queen_of_Swords",
      "77_King_of_Swords",
    ],
    extension: "jpg",
    back: "back",
  },
  thoth: {
    cards: [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59",
      "60",
      "61",
      "62",
      "63",
      "64",
      "65",
      "66",
      "67",
      "68",
      "69",
      "70",
      "71",
      "72",
      "73",
      "74",
      "75",
      "76",
      "77",
    ],
    extension: "JPG",
    back: "back",
  },
};

const deckName = Object.keys(decks)[1];
const currentDeck = decks[deckName];
var cards = currentDeck.cards;
var back = `images/${deckName}/${currentDeck.back}.${currentDeck.extension}`;
//MODULE 2: Functions

// create function to randomly select a number that corresponds with the number of cards available. Used Math.floor to remove remainder from the random calculation, found that i could never get the King Of Swords because 78 was an impossibility. opted for math.round in order to achieve that possibility.
var random = function () {
  return Math.round(Math.random() * (77 - cardsDealt));
};

// create a function to randomly determine if the card will be oriented up or down, if randomOrient returns 0, do nothing. if randomOrient returns 1, rotate the card at a 180 degree angle.
var randomOrient = function () {
  return Math.round(Math.random());
};

//create a function to remove a card once it has been used. This is a basic way to avoid duplicates. Implies that to deal we must refresh the page.
var removeCard = function (k) {
  for (var j = k; j < cards.length; j++) {
    cards[j] = cards[j + 1];
  }
  cardsLeftToDeal--;
  cardsDealt++;
};

// create function to deal your random number as a card
// also orient the card up if randomOrient is 0 & down if randomOrient is 1
var dealCard = function (i) {
  if (cardsLeftToDeal == 0) {
    return false;
  } else {
    //display card chosen in HTML by creating an image element
    var wrp = document.createElement("div");
    var img = document.createElement("img");
    wrp.style.display = "inline-block";
    var cardJustDealt = cards[i];
    var orient = randomOrient();
    $(img).addClass(cardJustDealt);
    // addClass for card's position (1-7)
    img.src = `images/${deckName}/${cards[i]}.${currentDeck.extension}`;
    img.alt = cards[i];
    var number = document.createElement("center");
    $(number).append(`${cardsDealt + 1}`);
    $(wrp).append(number);
    $(wrp).append(img);
    $(img).addClass(orient === 1 ? "orientationDown" : "orientationUp");
    removeCard(i);
    document.getElementById("hand").appendChild(wrp);
  }
};

//MODULE 3: Execution (JQuery)

//jquery: deal cards when "deck" is clicked & shuffle the deck by reloading the page (find a more efficient way of doing this within the page)
$(document).ready(function () {
  $("#deal").attr("src", back);
  $("#deal").click(function () {
    console.log(dealCard(random()));
  });
  $("#shuffle").click(function () {
    location.reload();
  });
});
