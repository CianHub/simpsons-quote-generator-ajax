// Variables
const fetchBtn = document.getElementById("fetch"),
  axiosBtn = document.getElementById("axios"),
  xhrBtn = document.getElementById("xhr"),
  jqueryBtn = document.getElementById("jquery");

// Write Quote
function writeQuote(quoteText) {
  const quote = document.getElementById("quote");
  quote.textContent = "'" + quoteText + "'";
}

// Fetch
let fetchApi = url => {
  fetch(url)
    .then(data => (!data.ok ? console.log(data.status) : data.json()))
    .then(data => writeQuote(data[0].quote))
    .catch(error => console.log(error));
};

fetchBtn.addEventListener("click", () => {
  url = "https://thesimpsonsquoteapi.glitch.me/quotes";
  fetchApi(url);
});

// Axios
let axiosApi = url => {
  axios(url)
    .then(
      data =>
        data.status != 200
          ? console.log(data.status)
          : writeQuote(data.data[0].quote)
    )
    .catch(error => console.log(error));
};

axiosBtn.addEventListener("click", () => {
  url = "https://thesimpsonsquoteapi.glitch.me/quotes";
  axiosApi(url);
});

//XHR
let XHR = new XMLHttpRequest();

let xhrApi = url => {
  XHR.onreadystatechange = () => {
    if (XHR.readyState == 4 && XHR.status == 200) {
      let data = JSON.parse(XHR.responseText);
      writeQuote(data[0].quote);
    }
  };
  XHR.open("GET", url);
  XHR.send();
};

xhrBtn.addEventListener("click", function() {
  url = "https://thesimpsonsquoteapi.glitch.me/quotes";
  xhrApi(url);
});

//jQuery

let jqueryApi = url => {
  jQuery
    .get(url)
    .done(data => writeQuote(data[0].quote))
    .fail(error => console.log(error));
};

jqueryBtn.addEventListener("click", function() {
  url = "https://thesimpsonsquoteapi.glitch.me/quotes";
  jqueryApi(url);
});
