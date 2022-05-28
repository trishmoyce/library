// A VARAIBLE THAT WILL STORE OUR ARRAY

let myLibrary = [];

// FUNCTION CREATING THE PROTOTYPE FOR ALL BOOKS

function Book(Title, Author, Pages, Status) {
    this.Title = Title
    this.Author = Author
    this.Pages = Pages
    this.Status = Status
}

// EXAMPLES OF BOOKS AND THEIR DATA IN VARIABLES
  
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "unread")
const billy = new Book("Billy and the Cloneasaurus", "Seymour Skinner", "420", "read")

// FUNCTION TO ADD BOOKS TO THE ARRAY

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

addBookToLibrary(theHobbit);
addBookToLibrary(billy);
console.log(myLibrary);

// FUNCTION ITERATES THROUGH AN ARRAY OF OBJECTS AND DISPLAYS OBJECT DATA IN GENERATED DIVS

var content = document.querySelector(".content");

function displayArray(anArray) {
    function createCard(anObject) {
        var newcard = document.createElement("div");
        newcard.classList.add("newcard")
        content.appendChild(newcard);
        const removebtn = document.createElement("button");
        removebtn.classList.add("removebtn")
        removebtn.textContent = "Remove";
        content.appendChild(removebtn);
            for (const key in anObject) {
                var newdiv = document.createElement("div");
                newdiv.textContent += `${key}: ${anObject[key]}`;
                newcard.appendChild(newdiv);
            }
    }
    anArray.forEach(createCard)
};

displayArray(myLibrary);

// BUTTON REVEALS FORM

const showbtn = document.querySelector(".showbtn");

function showForm() {
    var form = document.querySelector(".form");
    form.style.display = "block";
}

showbtn.addEventListener("click", showForm);

// BUTTON HIDES FORM AND CLEARS ANY CONTENTS

const hidebtn = document.querySelector(".hidebtn");

function hideForm() {
    var form = document.querySelector(".form");
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    form.style.display = "none";
}

hidebtn.addEventListener("click", hideForm);

// SUBMIT BUTTON STORES VALUE OF INPUTS AND DISPLAYS IT

const submitbtn = document.querySelector(".submitbtn");

var temptitle;
var tempauthor;
var temppages;
var tempstatus;
var newObject;

function submitForm() {
    temptitle = document.getElementById("title").value;
    document.getElementById("title").value = "";
    tempauthor = document.getElementById("author").value;
    document.getElementById("author").value = "";
    temppages = document.getElementById("pages").value;
    document.getElementById("pages").value = "";
    tempstatus = document.querySelector('input[name="status"]:checked').value;
        newObject = new Book(temptitle, tempauthor, temppages, tempstatus);
            addBookToLibrary(newObject);
            addNewestBook(newObject);
}

submitbtn.addEventListener('click', submitForm);

// ADDS A NEW BOOK IN A NEW DIV (FUNCTION TO BE INSERTED IN FUNCTION ABOVE)

function addNewestBook(anewobj) {
    var newercard = document.createElement("div");
    newercard.classList.add("newercard")
    content.appendChild(newercard);
    const removebtn = document.createElement("button");
    removebtn.textContent = "Remove";
    removebtn.classList.add("removebtn")
    content.appendChild(removebtn);
    for (const key in anewobj) {
        var newerdiv = document.createElement("div");
        newerdiv.textContent += `${key}: ${anewobj[key]}`;
        newercard.appendChild(newerdiv);
    }
};

// PUTS LISTENER EVENTS ON ALL "REMOVE" BUTTONS

const remove = document.getElementsByClassName("removebtn");

function removeBook() {
    alert("removed");
}

for (el of remove) {
    el.addEventListener("click", removeBook);
};

/*

// FINDS THE INDEX # OF A BOOK

const index = myLibrary.findIndex(library => library.Title === "Billy and the Cloneasaurus");
console.log(index);

//  SETS A VALUE ATTRIBUTE TO A DIV

function addAttribute() {
    document.querySelector(".showbtn").setAttribute("value", "test");
}

// UPDATES A VARIABLE

var phrase = "phrase";

for (let i = 1; i < 5; i++) {
    console.log(phrase += i);
}

*/