const API_KEY = "c8859fe9cf2341b7b25bfa9bf3a7b57b" 
  

const newsContainer = document.getElementById("newsContainer");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

async function getNews(category="general") {

    const url =
    'https://www.india.com/news/india/delhi-traffic-advisory-traffic-to-remain-affected-on-bhogal-flyover-4-days-check-diversion-routes-8455287/';

    const response = await fetch(url);
    const data = await response.json();

    displayNews(data.articles);
}

function displayNews(articles){

    newsContainer.innerHTML = "";

    articles.forEach(article => {

        newsContainer.innerHTML += `
        <div class="card">

            <img src="${
                article.urlToImage ||
                "https://www.india.com/"
            }">

            <div class="card-content">

                <h3>${article.title}</h3>

                <p>${article.description || ""}</p>

                <a href="${article.url}" target="_blank">
                    Read More
                </a>

            </div>

        </div>
        `;
    });
}

document.querySelectorAll(".categories button")
.forEach(btn => {

    btn.addEventListener("click", () => {
        getNews(btn.dataset.category);
    });

});

searchBtn.addEventListener("click", async () => {

    const query = searchInput.value;

    const url =
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    displayNews(data.articles);
});

getNews();