let personalMessage = document.getElementById("personal");

console.log(personalMessage);

function whoAreYou() {
    var person = prompt("please enter your name:");

    if(person === "inner-valor") {
        
        personalMessage.classList.remove("d-none");

        personalMessage.innerHTML = personalMessage.innerHTML.replace("stranger","back valor");

    } else {

        personalMessage.classList.remove("d-none");

        personalMessage.innerHTML = personalMessage.innerHTML.replace("back valor", "stranger");

                
    }


}








