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

const billy = new Book("Billy and the Cloneasaurus", "Seymour Skinner", "420", "read")

// FUNCTION TO ADD BOOKS TO THE ARRAY

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

addBookToLibrary(billy);
console.log(myLibrary);

// FUNCTION ITERATES THROUGH AN ARRAY OF OBJECTS AND DISPLAYS OBJECT DATA IN GENERATED DIVS

var content = document.querySelector(".content");

function displayArray(anArray) {
    function createCard(anObject) {
        // creates card div
        var newcard = document.createElement("div");
        newcard.setAttribute("id", 0);
        content.appendChild(newcard);
        // creates remove button
        const removebtn = document.createElement("button");
        removebtn.classList.add("removebtn")
        removebtn.textContent = "Remove";
        newcard.appendChild(removebtn);
        // creates status change button
        const readtoggle = document.createElement("button");
        readtoggle.classList.add("readtoggle")
        readtoggle.textContent= "Switch Read Status";
        // creates divs for each row of data
        newcard.appendChild(readtoggle);
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
    // creates card div
    var newercard = document.createElement("div");
    content.appendChild(newercard);
    // assigns id for each new div added
    let indexid = 0;
        for (let i = 0; i < myLibrary.length; i++) {
        indexid = i;
    }
    newercard.setAttribute("id", indexid);
    // creates remove button
    const removebtn = document.createElement("button");
    removebtn.classList.add("removebtn")
    removebtn.textContent = "Remove";
    newercard.appendChild(removebtn);
    // creates status change button
    const readtoggle = document.createElement("button");
    readtoggle.classList.add("readtoggle")
    readtoggle.textContent= "Switch Read Status";
    newercard.appendChild(readtoggle);
    // creates divs for each row of data
    for (const key in anewobj) {
        var newerdiv = document.createElement("div");
        newerdiv.textContent += `${key}: ${anewobj[key]}`;
        newercard.appendChild(newerdiv);
    }
};

/* PUTS LISTENER EVENTS ON ALL "REMOVE" BUTTONS

const contentContainer = document.querySelector(".content");

function removeCard(e) {
    if (e.target.classList.contains("removebtn")) {
//        const cardToRemove = document.querySelector(".newercard");
//        cardToRemove.remove();
        alert("removed");
    }
};

contentContainer.addEventListener("click", removeCard);

//function removeCard(e) {
//    if (document.getElementById("0").contains(e.target)) {
//        alert("removed");
//    }
//};

function removeCard(e) {
    const zero = document.getElementById("0");
        if (document.getElementById("0").contains(e.target)) {
        zero.remove();
        }
    };

//    alert(e.target.parentElement.id);

    */

const contentContainer = document.querySelector(".content");

function removeCard(e) {
var mydivs = document.querySelector(".content").children;
    for (var i = 0; i < mydivs.length; i++) {
        if (mydivs[i].contains(e.target)) {
            mydivs[i].remove();
            removeFromArray = myLibrary.splice(e.target.parentElement.id, i);
        }
    }
}

contentContainer.addEventListener("click", removeCard);

// PUTS LISTENER EVENTS ON ALL "READ" BUTTONS

function toggleRead(e) {
    if (e.target.classList.contains("readtoggle")) {
//        const cardToRemove = document.querySelector(".newercard");
//        cardToRemove.remove();
        alert("read");
    }
};

contentContainer.addEventListener("click", toggleRead);

/*

// FINDS THE INDEX # OF A BOOK

const index = myLibrary.findIndex(library => library.Title === "Billy and the Cloneasaurus");
console.log(index);

const fibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]

function findFibNum(indexNum) {
  for (let i = 0; i = indexNum; i++) {
    return fibSequence[i];
  }
}

findFibNum(4);
// returns 3
findFibNum(6);
// returns 8

*/

// set the div's value to the index number of the object it contains
// when the button is pressed, it targets the value and removes the div

// add a cheeky note if someone tries to remove the first book: it's free and cannot be removed from the library