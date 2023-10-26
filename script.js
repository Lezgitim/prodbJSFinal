let nameProducts = document.getElementById("nameProducts");
let reviews = document.getElementById("reviews");
const body = document.querySelector("body");

function button() {
  localStorage.setItem(nameProducts.value, reviews.value);
}

function seeReviews() {
  for (let [key, value] of Object.entries(localStorage)) {
    body.insertAdjacentHTML(
      "beforeend",
      ` <br>
          <div onclick="seeValue('${value}')">
          ${key} 
          </div> <br><button onclick="delReviews('${key}')">удалить отзыв</button>
          <br> <br>
      `
    );
  }
}
let item = document.createElement("div");
function seeValue(val) {
  for (let [key, value] of Object.entries(localStorage)) {
    item[key] = document.createElement("div");
    item[key].append(`${value}`);
    if (val === value) {
      document.body.append(item[key]);
    }
  }
}

function delReviews(ke) {
  for (let [key, value] of Object.entries(localStorage)) {
    if (ke == key) {
      localStorage.removeItem(key);
      location.reload();
    }
  }
}
