let personalMessage = document.getElementById("personal");

console.log(personalMessage);

function whoAreYou() {
    var person = prompt("please enter your name:");

    if(person === "inner-valor") {
        
        personalMessage.classList.remove("d-none");

        personalMessage.innerHTML = personalMessage.innerHTML + "back valor!";

    } else if(person === "") {

        personalMessage.classList.add("d-none");
    } else {

        personalMessage.classList.remove("d-none");

        personalMessage.innerHTML = personalMessage.innerHTML.replace(personalMessage.innerHTML,"welcome "+ person);

                
    }


}








