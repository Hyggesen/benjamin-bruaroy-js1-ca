const url =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

console.log(url);

const resultsContainer = document.querySelector(".result-container");

async function makeApiCall() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    for (let i = 0; i < results.length; i++) {
      resultsContainer.innerHTML += `
    <div class="card">
    <img src=${results[i].image_link}>
    <h2 class="name">${results[i].name}</h2>
    <p class="price"> ${results[i].price}</p>
    </div>
    `;
    }
  } catch {
    console.log("ERROR");
  }
}

makeApiCall();
