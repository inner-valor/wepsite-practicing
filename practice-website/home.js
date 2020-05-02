


function whoAreYou() {
    var person = prompt("please enter your name:");

    if(person === "inner-valor") {
        document.getElementById("personal").classList.remove("d-none");
    } else {
        document.getElementById("guest").classList.remove("d-none");
    };
}








