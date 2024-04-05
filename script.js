const adviceID = document.querySelector(".advice-num");
const adviceText = document.querySelector(".main-text");
const button = document.querySelector(".btn-primary");

// console.log(adviceID,adviceText);

button.addEventListener("click", withfetch);

// Sending with HTTPrequest :-


// function sendingHTTpRequest(){
//     const xhr = new XMLHttpRequest();

//   xhr.responseType = "json";

//   xhr.addEventListener("load", () => {
//     adviceText.innerText = xhr.response.slip.advice;
//     adviceID.innerText = xhr.response.slip.id;
//   });

//   xhr.open("GET", "https://api.adviceslip.com/advice");
//   xhr.send();
// }

function withfetch(){
  fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((adviceData) => {
    return adviceText.innerText = adviceData.slip.advice, 
    adviceID.innerText = adviceData.slip.id;
  })
}
