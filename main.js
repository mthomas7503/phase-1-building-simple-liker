// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
let liker = document.querySelectorAll('span');
let heart = document.querySelectorAll('.like-glyph');
const div = document.getElementById('modal')

function unfillHeart() {heart.classList.remove('activated-heart');
heart.classList.add('like-glyph');
heart.innerText = EMPTY_HEART}

function fillHeart() {heart.classList.remove('like-glyph');
heart.classList.add("activated-heart");
heart.innerText = FULL_HEART}
// Your JavaScript code goes here!


function init() {
  heart.forEach(x => {x.addEventListener('click', onlike())})}

function onLike() {mimicServerCall()
  .then(() => {
    if (heart.innerText === EMPTY_HEART)
  {fillHeart()}
  else if (heart.innerText === FULL_HEART)
  {unfillHeart()}})
    .catch((error)=> {
    div.innerText = error.message
    div.classList.remove('hidden')});
  setTimeout(function() {div.classList.add('hidden')}, 3000)}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

//document.addEventListener('DOMContentLoaded', init())

