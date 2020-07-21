console.log("welcome");
showNotes();

let addBtn = document.getElementById("b11");

addBtn.addEventListener("click", function (e) {
    t = e.target.parentNode;
    console.log(t);
    title = document.getElementById('title');
    // title = title.value;
    description = document.getElementById('description');
    // description = description.value;
    // console.log(title);
    let notes = localStorage.getItem('notes');
    // let desc = localStorage.get('desc');
    if (notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    let Obj = {
        title : title.value,
        description : description.value
    }
    if (title.value == "" || description.value == "")
    {
        alert('All fields are compulsory');
    }
    else{
        notesObj.push(Obj);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        title.value = "";
        description.value = "";
    }
    console.log(notesObj);
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text"> ${element.description}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
    });

    let notesElm = document.getElementById('mynote');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
function deleteNote(index) {
    //   console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('search');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        let cardTxt1 = element.getElementsByTagName("h5")[0].innerText;
        if (cardTxt.includes(inputVal) || cardTxt1.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})





