console.log('hello');



let showWord = document.getElementById("showWord");
let btn = document.getElementById('btn');
btn.addEventListener("click",load1);

function load1(){
    // console.log('chlra hau');
    
    // console.log(findWord.value);
    // console.log(findWord.value)
    let innHtml = '';
    let xhr = new XMLHttpRequest();
    xhr.open(`GET`, `js/data.json`, true);
    xhr.onload = function () {
        if (this.status == 200) {
            let findWord = document.getElementById('findWord');
            findWord1 = findWord.value.toLowerCase();
            findWord2 = findWord.value.toUpperCase();
            let a = JSON.parse(this.responseText);
            // console.log(a.acid);
            // console.log(Object.keys(a))
            let vsl = `${findWord1}`;
            let vsl2 = `${findWord2}`;
            findWord.value = "";
            if (Object.keys(a).includes(vsl)){
                // console.log('aara h');
                // console.log(a[vsl]);
                let result = a[vsl];
                result.forEach((element,index) => {
                    // console.log(element,index+1);

                    let word = `
                        <p class="leading-relaxed">${index+1} ${element}</p>
                    `;
                    innHtml += word;
                });
                showWord.innerHTML = innHtml; 
                

            } else if (Object.keys(a).includes(vsl2)){
                let result = a[vsl2];
                result.forEach((element, index) => {
                    // console.log(element,index+1);

                    let word = `
                        <p class="leading-relaxed">${index + 1} ${element}</p>
                    `;
                    innHtml += word;
                });
                showWord.innerHTML = innHtml;

            } else{
                // console.log('sorry');
                showWord.innerHTML = `<p class="leading-relaxed">Sorry! We cannot find the word Try something else</p>`; 
            }

        }else{
            alert('some error occured');
        }
    }




    xhr.send()


}
// xhr.onload = function () {
//     if (this.status == 200) {
//         let a = JSON.parse(this.responseText);
//         // let b = a;
//         // console.log(a);

//     }
// }

