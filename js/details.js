const singleResultsContainer = document.querySelector(".singleResults");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const code = params.get("alpha2Code");

console.log(queryString);

const url = "https://restcountries.eu/rest/v2/alpha/" + code;

async function getSingleApi() {
  try {
    const response = await fetch(url);
    const jsonSingle = await response.json();
    console.log(jsonSingle);

    createCountryHtml(jsonSingle);
  } catch (error) {
    singleResultsContainer.innerHTML = displayError(
      "We could not find this Country right now, please try again."
    );
  }
}
getSingleApi();

function createCountryHtml(jsonSingle) {
  singleResultsContainer.innerHTML = `
    <h1 class="country-header">${jsonSingle.name}</h1>
   <div class="details-img"
       style="background-image: url('${jsonSingle.flag}')">
   </div>
   <div class="big-card">
   <h2> Some facts about ${jsonSingle.name}: </h2>
   <p> The capital of ${jsonSingle.name} is <span>${jsonSingle.capital}</span></p>
   <p> ${jsonSingle.name} has a population of <span>${jsonSingle.population}</span></p>
   <p>${jsonSingle.name} is located in <span>${jsonSingle.region}</span>- or more spesific <span>${jsonSingle.subregion}</span></p>
   <p>The native way of saying ${jsonSingle.name} is <span>${jsonSingle.nativeName}</span></p>
   
   `;

  const pageTitle = document.querySelector(".title");

  pageTitle.innerHTML = `${jsonSingle.name}`;
}
