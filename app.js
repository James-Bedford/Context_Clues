document.addEventListener("DOMContentLoaded", function () {
  //add container
  var mainContainer = document.createElement(`div`);
  mainContainer.classList.add(`mainContainer`);
  for (var i = 1; i <= 100; i++) {
    window["var accusation" + i] = document.createElement(`h3`);
    window["var accusation" + i].classList.add(`accusation`);
    window["var accusation" + i].setAttribute(`id`, `${i}`);
    window["var accusation" + i].setAttribute(`name`, `accusation${i}`);
    window["var accusation" + i].setAttribute(`tagName`, `accusation${i}`);
    var text = document.createTextNode(`Accusation ${i}`);
    window["var accusation" + i].appendChild(text);
    mainContainer.appendChild(window["var accusation" + i]);
    document.body.appendChild(mainContainer);
    window["var accusation" + i].style.backgroundColor = rainbow();
  } //end creation for loop

  document.addEventListener("click", function (e) {
    var i = e.target.id;
    accusation(i);
  });
}); //end document.addEvenlistner

//Random RGB color generator function
function rainbow() {
  var min = 0;
  var max = 255;
  var colorRGB1 = Math.floor(Math.random() * (max - min) + min);
  var colorRGB2 = Math.floor(Math.random() * (max - min) + min);
  var colorRGB3 = Math.floor(Math.random() * (max - min) + min);
  var output =
    "rgb" + `(` + colorRGB1 + `,` + colorRGB2 + `,` + colorRGB3 + `)`;
  return output;
}

function accusation(i) {
  return alert(
    `Accusation ${i}: I accuse ${friend(i)}, with the ${how(
      i
    )} in the ${locations(i)}!`
  );
}

function friend(i) {
  var friend = [
    `Andrew`,
    `Professor Plum`,
    `Miss Scarlet`,
    `Rev Green`,
    `Mrs White`,
  ];
  return friend[i % 5];
}
function locations(i) {
  var locations = [
    `Kitchen`,
    `Basement`,
    `Master Bedroom`,
    `Pool`,
    `Dining Room`,
    `Man Cave`,
    `Music Room`,
    `Garage`,
    `Bath room`,
    `Living Room`,
  ];
  return locations[i % 10];
}
function how(i) {
  var how = [
    `Rubber Chicken`,
    `Chilli Sauce`,
    `Magic Wand`,
    `Encyclopedia Set`,
    `World Globe`,
    `Gene Simmons Wig`,
    `Mint Bubble Bath`,
    `Stale Twinkie`,
    `With a discussion on Federal Tax`,
    `Earth Wind and Fire Album`,
    `David Hasselhoff autobiography`,
    `A Disney film`,
    `Pair of Chaps`,
    `Water Pistol`,
    `Ping Pong Ball`,
    `Repeat of Qunicy M.E`,
    `Fake British Accent`,
    `Ball of Twine`,
    `Post It Note`,
    `DVD of Windows 10`,
    `Lamb Chop`,
  ];
  return how[i % 20];
}
