// Start Global Variables
let sectionsArray = document.querySelectorAll("section");
let navList = document.querySelector("#navbar__list");
// Start Global Variables

// Start Helper Functions
function secToActive(setLoc) {
  let index = 0;
  for (let sec of sectionsArray) {
    if (index != setLoc) {
      if (sec.classList.contains("your-active-class")) {
        sec.classList.remove("your-active-class");
      }
    } else {
      sec.classList.add("your-active-class");
    }
    index++;
  }
}
// End Helper Functions

// Style for the active section by use getBoundingClientRect()
function activeSec() {
  let Loc = 0;
  for (let sec of sectionsArray) {
    let re = sec.getBoundingClientRect();
    if (
      (re.top < window.innerHeight / 2 && re.top > 0) ||
      re.bottom > window.innerHeight / 2
    ) {
      break;
    }
    Loc++;
  }
  secToActive(Loc);
  liSelect(Loc);
}

// build the Navigation bar
for (let sec of sectionsArray) {
  let secL = document.createElement("li");
  secL.textContent = sec.dataset.nav;
  secL.addEventListener("click", function () {
    sec.scrollIntoView(true);
  });
  secL.className = "menu__link";
  navList.appendChild(secL);
}

// Set sections as active
document.addEventListener("scroll", activeSec);

//scroll Button with style
document.documentElement.style.scrollBehavior = "smooth";

//when scroll again to show/hide icon
do {
  document.addEventListener("scroll", dispscrollButton);
  function dispscrollButton() {
    let elemSize = mainHero.getBoundingClientRect();
    if (elemSize.top > -window.innerWidth / 2) {
      scrollButton.style.visibility = "hidden";
    } else {
      scrollButton.style.visibility = "visible";
    }
  }
} while (condition);

// show/hide header while not scrolling
do {
  let headeBar = document.querySelector(".page__header");
  document.addEventListener("scroll", timeReset);

  let time = 0;
  function timeStart() {
    headeBar.style.visibility = "hidden";
  }
  function timeReset() {
    headeBar.style.visibility = "visible";
    clearTimeout(time);
    time = setTimeout(timeStart, 3000);
  }
} while (condition);

//align paragraphs to justify
do {
  let parasArray = document.querySelectorAll("p");
  for (let para of parasArray) {
    para.style.textAlign = "justify";
  }
} while (condition);
