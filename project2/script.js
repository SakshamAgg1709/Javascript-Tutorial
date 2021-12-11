console.log('This is SA Library');

//Contructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//display contructor

function Display() {

}

//Add methods to Display prototype
Display.prototype.add = function(book){
    console.log("Adding to ui")//We have to add book in table 
    tableBody = document.getElementById('tableBody')
    let uiString = ` <tr>
                        <th>${book.name}</th>
                        <th>${book.author}</th>
                        <th>${book.type}</th>
                    </tr>

    ` 
    tableBody.innerHTML += uiString
}
//Implementing the clear function
Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm")
    libraryForm.reset();
}
//Implementing the validate function
Display.prototype.validate = function(book){
    if(book.name.length<2 || book.author.length<2){
        return false;
    }else{
        return true;
    }
}
//Implementing the show function
Display.prototype.show = function(string){
    if(string=="Error"){
        let message = document.getElementById('message')
        message.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </symbol>
      <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
      </symbol>
      <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </symbol>
    </svg>
    
    <div class="alert alert-danger d-flex align-items-center" role="alert">
      <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
      <div>
        <strong>ERROR</strong> Please enter Correct Book Name or Author Name
      </div>
    </div>
        `
    }else if(string=="Success"){
        let message = document.getElementById('message')
        message.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </symbol>
      <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
      </symbol>
      <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </symbol>
    </svg>
    
    <div class="alert alert-success d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div>
  <strong>Added</strong> Your Book has successfully added.</div>
</div>
        `
    }
    setTimeout(() => {
        message.innerHTML = ''
    }, 5000);
}


//Add submit event listener to the form directly

//document.forms[1] - dont use this!! - Not a gud practise
let libraryForm = document.getElementById("libraryForm")
libraryForm.addEventListener('submit', libraryFormSubmit)//we don't need to put () as it takes function as an argument only
//Usually,form will reload the page after the submit button is clicked, but we want the function to be executed

function libraryFormSubmit(e) {
    e.preventDefault();//to stop the reload od the page - preventing the default behaviour of form to reload after every submission
    console.log("You have submitted the library form")
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    //fiction, non-fiction, others
    let fiction = document.getElementById('fiction');
    let nonFiction = document.getElementById('nonFiction');
    let others = document.getElementById('others');

    if (fiction.checked) {
        type = fiction.value

    } else if (nonFiction.checked) {
        type = nonFiction.value;

    } else if (others.checked) {
        type = others.value;

    }
    let book = new Book(name, author, type)
    console.log(book)
    
    let display = new Display()
    if(display.validate(book)){
        display.add(book)
        display.clear()
        display.show('Success')
    }else{
        //show error
        display.show('Error')
    }
}

