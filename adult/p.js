console.log("welcome");

const xhr = new XMLHttpRequest();
xhr.open(`GET`, `https://www.eporner.com/api/v2/video/search/?per_page=100&page=1&thumbsize=big&order=top-monthly&gay=1&lq=1&format=json`, true);


xhr.onload = function () {
    if (this.status == 200) {
        let txt = JSON.parse(this.responseText);
        let videos = txt.videos;
        localStorage.setItem("videos", JSON.stringify(videos));
        let innHtml = '';
        videos.forEach(function (element, index) {
            // console.log(element);
            let news = `
                <div class="p-4 md:w-1/4 lg:1/4 sm:1/2">
    <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <img class="lg:h-48 md:h-48 w-full object-cover object-center" src="${element.default_thumb.src}"
            alt="blog" id="${index}" onmouseover="mouseOver(this.id)" onmouseout="mouseOut(this.id)">
            <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">Title &nbsp &nbsp Ratings: ${element.rate}</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3"> ${element["title"]}</h1>
                <p class="leading-relaxed mb-3">Length: ${element.length_min} &nbsp &nbsp Views: ${element.views}</p>
                <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="${element['url']}" target="_blank">Watch video
                                           </a>
                </div>
            </div>
                            </div>
    </div>
            `;
            // let aa = document.getElementById(element.id);
            // let aa = element.id;
            // console.log(aa);

            innHtml += news;
        });
        pornApi.innerHTML = innHtml;
    }
    else {
        alert("please connect to vpn");
    }
}

// function Slides(x){
//     console.log(x);
// }
// function rollover(my_image) {

//     my_image.src = 'someimage2.jpg';

// }

function mouseOver(x){
    console.log(x);
    // console.log(videos[x]);
    let videos = localStorage.getItem("videos");
    let Nvideos = JSON.parse(videos);
    // console.log(Nvideos[x].thumbs[0].src);
    let src1 = document.getElementById(x).src;
    // console.log(src1);
    let thumbs = [];
    for (i of Nvideos[x].thumbs)
   { 
    //     setTimeout(() => { document.getElementById(x).src = i.src; }, 1000);
    // console.log(i.src);
    thumbs.push(i.src);
   }
//    console.log(thumbs);
   thumbs.forEach(element => {
    //    console.log(element);
    //    setTimeout(() => { document.getElementById(x).src = element; }, 1000);
       document.getElementById(x).src = element;
       
   });

}

function mouseOut(x) {
    console.log(x);
    // let videos = localStorage.getItem("videos");

}


xhr.send()