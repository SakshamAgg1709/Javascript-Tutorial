console.log("Welcome to Notes app");
showNotes()

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.querySelector('#addTxt');
  let addTitle = document.querySelector('#addTitle');
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title : addTitle.value,
    text : addTxt.value
  }
  notesObj.push(myObj);//Now noteObj is an array of mulitple objects like myObj , earlier it was only an array of strings
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  // console.log(notesObj);
  showNotes();
});

//Adding title to the notes

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  // console.log(typeof notes)
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let addTitle = document.querySelector('#addTitle');
  let html = "";
  notesObj.forEach(function (element, index, addTitle) {//notes is an array
    html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">${element.title}</h5>
                          <p class="card-text"> ${element.text}</p>
                          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                      </div>
                  </div>`;
    // 'this' is the button only on which the function is called and its id is been called - deletote funciton takes index as the argumentand id of the button is index only
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `<b>Nothing to show! Use "Add a Note" section above to add notes.</b>`;
  }
}

// Function to delete a note 

function deleteNote(index) {// It is called in html varible in shownotes functions
  // console.log("I am deleting", index)

  let notes = localStorage.getItem("notes");
  // console.log(typeof notes)
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1)
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes()
}

//Adding Search functionality

let search = document.getElementById('searchBox')
search.addEventListener('input', function () {
  let inputVal = search.value.toLowerCase(); // to add more functionality
  console.log("Input Event Fired", inputVal)//When ever you type something in the search box

  let noteCards = document.getElementsByClassName('noteCard')
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByClassName('card-text')[0].innerText.toLowerCase()//Har element ke andar ek hi <p> h - using innertext is very important, because we can use .includes() function only with a string
    // console.log(cardTxt)
    let cardTitle = element.getElementsByClassName('card-title')[0].innerText.toLowerCase()
    if (cardTxt.includes(inputVal)  || cardTitle.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }

  })
})