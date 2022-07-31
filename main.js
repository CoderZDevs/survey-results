const card1 = document.querySelector(".one");
const card2 = document.querySelector(".two");
const card3 = document.querySelector(".three");
const card4 = document.querySelector(".four");
const card5 = document.querySelector(".five");

card1.addEventListener("click", function (e) {
  card1.classList.toggle('is-flipped');
});
card2.addEventListener("click", function (e) {
  card2.classList.toggle('is-flipped');
  card1.classList.toggle('is-flipped');
});
card3.addEventListener("click", function (e) {
  card3.classList.toggle('is-flipped');
  card2.classList.toggle('is-flipped');
});
card4.addEventListener("click", function (e) {
  card4.classList.toggle('is-flipped');
  card3.classList.toggle('is-flipped');
});
card5.addEventListener("click", function (e) {
  card5.classList.toggle('is-flipped');
  card4.classList.toggle('is-flipped');
});

function f1(){
  console.log(1);
  card1.classList.remove('is-flipped');
  card2.classList.remove('is-flipped');
  card3.classList.remove('is-flipped');
  card4.classList.remove('is-flipped');
  card5.classList.remove('is-flipped');

}