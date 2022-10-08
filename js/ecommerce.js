var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let up = document.getElementById("up");

window.onscroll = function () {
  if (window.scrollY >= 650) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};

up.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

let next = document.getElementById("next");
let prev = document.getElementById("prev");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");

next.onclick = function(){
  next.style.background = "#004D50";
  prev.style.background = "#bbb";
  four.style.display = "block";
  five.style.display = "block";
  six.style.display = "block";
  one.style.display = "none";
  two.style.display = "none";
  three.style.display = "none";
}
prev.onclick = function() {
  prev.style.background = "#004D50";
  next.style.background = "#bbb";
  four.style.display = "none";
  five.style.display = "none";
  six.style.display = "none";
  one.style.display = "block";
  two.style.display = "block";
  three.style.display = "block";

}