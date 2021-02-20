const url = "https://restcountries.eu/rest/v2/";

console.log(url);

const resultsContainer = document.querySelector(".result-container");

async function makeApiCall() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < 20; i++) {
      resultsContainer.innerHTML += `
    <a href="details.html?alpha2Code=${results[i].alpha2Code}" class="card">
    <h2 class="name">${results[i].name}</h2>
    <img src=${results[i].flag}>
    <p class="population">Population: <br><span>${results[i].population}</span></p>
    </a>
    `;
    }
  } catch (error) {
    console.log(error);

    resultsContainer.innerHTML = displayError(
      "We're sorry, but an error occured"
    );
  }
}

makeApiCall();
