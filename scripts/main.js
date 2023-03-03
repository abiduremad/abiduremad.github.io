let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("Who is the greatest coder in the world!?");
    localStorage.setItem("name", myName);

    if (myName.length > 0) {
        myHeading.textContent = `${myName} is Learning to Code`;
    } else {
        myHeading.textContent = "Learning to Code";
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName} is Learning to Code`;
}

myButton.onclick = () => {
    setUserName();
};