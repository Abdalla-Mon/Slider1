let imgsArr = document.querySelectorAll(".slider-container img");
let currentimg = 0;
let imgNumbers = imgsArr.length;
let slideNumber = document.getElementById("slide-number");
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");
let ulContainer = document.querySelector(".indicators");
// creating the li
let ul = document.createElement("ul");
imgsArr.forEach((img, index) => {
  let li = document.createElement("li");
  li.innerHTML = index + 1;
  li.setAttribute("data-index", index);
  ul.appendChild(li);
});
ulContainer.appendChild(ul);
let li = document.querySelectorAll("ul li");
nextButton.onclick = next;
prevButton.onclick = prev;
slider();
li.forEach((li) => {
  li.onclick = function () {
    currentimg = +this.dataset.index;
    slider();
  };
});
function next() {
  if (currentimg == imgNumbers - 1) {
    return false;
  } else {
    currentimg++;
    slider();
  }
}

function prev() {
  if (currentimg == 0) {
    return false;
  } else {
    currentimg--;
    slider();
  }
}

//creating the slider function

function slider() {
  removeActiveClass();
  imgsArr[currentimg].classList.add("active");
  li[currentimg].classList.add("active");
  slideNumber.innerHTML = `Slide ${currentimg + 1} of ${imgNumbers}`;
  if (currentimg == 0) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (currentimg == imgNumbers - 1) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}
function removeActiveClass() {
  imgsArr.forEach((img) => {
    img.classList.remove("active");
  });

  li.forEach((li) => {
    li.classList.remove("active");
  });
}
