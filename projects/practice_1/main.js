const RANDOM_NUMBER =  Math.floor(Math.random() * 100) + 1;

console.log(RANDOM_NUMBER);

const guessForm = document.getElementById("guessForm");
const Message = document.getElementById("message");

guessForm.addEventListener("submit",function(e){

    e.preventDefault();

    let userGuess = parseInt(document.getElementById("guess").value);



    if(userGuess === RANDOM_NUMBER){
        Message.innerHTML = "Congratulations! You guessed the right number"
        Message.classList.add("text-green-500")
       
    }
    else{
        
        Message.innerHTML = `Sorry! The number was ${RANDOM_NUMBER} and you guessed ${userGuess}`
        Message.classList.add("text-red-500")

    }

    guessForm.reset();

})