console.log('sgyugyudsg');

let newsApi = document.getElementById("newsApi");

let source = 'null';
let apiKey = '';

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,true);

xhr.onload = function() {
    if (this.status === 200){
        let txt = JSON.parse(this.responseText);
        let articles = txt.articles;
        let innHtml = '';
        articles.forEach(function (element, index) {
            let news = `
                <div class="lg:w-1/3 sm:w-1/2 p-2">
                    <div class="flex relative">
                        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"
                            src="${element['urlToImage']}" />
                        <div
                            class="px-8 py-5 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 class="text-white text-lg title-font font-medium">
                                ${element["title"]}
                            </h2>
                            <p class="leading-relaxed">
                                ${element["content"]}
                            </p>
                            <a class="mt-3 text-black-500 inline-flex items-center" href="${element['url']}" target="_blank">Read More</a>
                        </div>
                    </div>
                </div>
            `;

            innHtml += news;
            
        });
        newsApi.innerHTML = innHtml; 
    }
    else{
        alert('some error occured');
    }

}

xhr.send()