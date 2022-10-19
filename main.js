let heading = document.getElementById("heading")

let paragraph = document.getElementById("paragraph")

let randomNumbers = []

let maxNumbers = 5

let number;

let timeOutClear = setTimeout(clear, 2000)
let timeOutRequest = setTimeout(request, 3000)

let answer;

let points = 0

let output = []

for(let i = 0; i < 5; i++){
    number = Math.floor(Math.random()*30)
    randomNumbers.push(number)
    console.log(randomNumbers)
}

heading.innerHTML = randomNumbers

function clear(){
    heading.innerHTML = "Please insert the numbers you just saw"
}

function request(){
    for(let i = 0; i < maxNumbers; i++){
        answer = Number(prompt("Inserisci uno dei 5 numeri presenti"))
        
        if(answer == randomNumbers[i]){
            output.push("you remembered the number " + randomNumbers[i]) 
            points++
            console.log(randomNumbers,output,points)
        } else {
            output.push("you did not remember the number "  + randomNumbers[i])
        }
    }

    heading.innerHTML = "You have remembered " + points + " numbers"
    for(let i = 0; i < maxNumbers; i++){
        paragraph.innerHTML += output[i]
        paragraph.innerHTML += "<br>"
    }
}
