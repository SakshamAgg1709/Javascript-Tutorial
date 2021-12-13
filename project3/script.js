console.log("This is SA News")
// API Key - 52a8bd6376ef426e877a6df44431e4af


//Initialize News API Parameters
let source = 'times-of-india'
let apiKey = '52a8bd6376ef426e877a6df44431e4af'

//Grab news Container
let newsContainer = document.getElementById('newsAccordion')

//Create Ajax GET Request

const xhr = new XMLHttpRequest;
xhr.open('GET', `https://newsapi.org/v2/everything?q=${source}&from=2021-12-13&sortBy=popularity&apiKey=${apiKey}`, true)

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        console.log(articles);
        let newsHTML = '';
        articles.forEach(function (element, index) {
            let news = `<div class="card" style="text-align:left;">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="false" aria-controls="collapse${index}">
                   <b>Breaking News ${index + 1}:</b> ${element["title"]}
                </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
            </div>
        </div>      
            `
            newsHTML += news
        })
        newsContainer.innerHTML = newsHTML
    } else {
        console.log('Some Error occured');

    }
}

xhr.send()                     