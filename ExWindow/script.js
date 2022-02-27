function guessNumber(nbTries){
    let list=['0','1','2','3','4','5','6','7','8','9','10'];
    let x = Math.floor(Math.random() * 11);

    for (let i=0; i<nbTries; i++) {
        let guess=prompt("you have "+ (nbTries-i) + " tries");
        if (guess==null){
            break;
        }
        else if (guess==x){
            alert("Correct!!");
            break;
        }
        else if(!list.includes(guess.trim()) || guess==""){
            alert("Please type numbers between 0 and 10 only");
            i--;
        }
        else {
            if (i==nbTries-1) alert("you have failed");
            else alert("Try Again");
        }
    }
}

let NewGame=true;
window.addEventListener("load",()=>{
    while (NewGame) {
        let nb = prompt("You're going to guess a number between 0 and 10 choose a number of tries");
        if (nb!=null)
        guessNumber(nb);
        NewGame=confirm("Do you want to play again?");
    }
})

