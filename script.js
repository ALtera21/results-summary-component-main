function reactionValidation() {
    
    const reactionValue = document.getElementById("reactionValue").value;

    if(reactionValue == "" || reactionValue > 100 || reactionValue < 0){
    document.getElementById("reactionValue").style.border = '2px solid red';
    document.getElementById("reactionValue").style.borderRadius = '5px';
    }
    else{
        document.getElementById("reactionValue").style.border = 'none';
    }
}

document.querySelector("button").addEventListener("click", () => reactionValidation())



function memoryValidation() {
    
    const memoryValue = document.getElementById("memoryValue").value;

    if(memoryValue == "" || memoryValue > 100 || memoryValue < 0){
    document.getElementById("memoryValue").style.border = '2px solid red';
    document.getElementById("memoryValue").style.borderRadius = '5px';
    }
    else{
        document.getElementById("memoryValue").style.border = 'none';
    }
}

document.querySelector("button").addEventListener("click", () => memoryValidation());



function verbalValidation() {
    
    const verbalValue = document.getElementById("verbalValue").value;

    if(verbalValue == "" || verbalValue > 100 || verbalValue < 0){
    document.getElementById("verbalValue").style.border = '2px solid red';
    document.getElementById("verbalValue").style.borderRadius = '5px';
    }
    else{
        document.getElementById("verbalValue").style.border = 'none';
    }
}

document.querySelector("button").addEventListener("click", () => verbalValidation());



function visualValidation() {
    
    const visualValue = document.getElementById("visualValue").value;

    if(visualValue == "" || visualValue > 100 || visualValue < 0){
    document.getElementById("visualValue").style.border = '2px solid red';
    document.getElementById("visualValue").style.borderRadius = '5px';
    }
    else{
        document.getElementById("visualValue").style.border = 'none';
    }
}

document.querySelector("button").addEventListener("click", () => visualValidation());



function average(){
    const reactionValue = Number(document.getElementById("reactionValue").value);
    const memoryValue = Number(document.getElementById("memoryValue").value);
    const verbalValue = Number(document.getElementById("verbalValue").value);
    const visualValue = Number(document.getElementById("visualValue").value);

    if(reactionValue == "" || reactionValue > 100 || reactionValue < 0 || memoryValue == "" || memoryValue > 100 || memoryValue < 0 || verbalValue == "" || verbalValue > 100 || verbalValue < 0 || visualValue == "" || visualValue > 100 || visualValue < 0){
        document.getElementById("score").innerHTML = "---"; 
    }

    else{
        const total = Math.round((reactionValue + memoryValue + verbalValue + visualValue) / 4);
        document.getElementById("score").innerHTML = total;
    }
}

document.querySelector("button").addEventListener("click", () => average());



function rating() {
    const reactionValue = Number(document.getElementById("reactionValue").value);
    const memoryValue = Number(document.getElementById("memoryValue").value);
    const verbalValue = Number(document.getElementById("verbalValue").value);
    const visualValue = Number(document.getElementById("visualValue").value);

    if(reactionValue == "" || reactionValue > 100 || reactionValue < 0 || memoryValue == "" || memoryValue > 100 || memoryValue < 0 || verbalValue == "" || verbalValue > 100 || verbalValue < 0 || visualValue == "" || visualValue > 100 || visualValue < 0){
        document.getElementById("rating").innerHTML = "?"; 
    }
    else{
        if (Math.round((reactionValue + memoryValue + verbalValue + visualValue) / 4) <= 30){
            document.getElementById("rating").innerHTML ="Next time will be better!";
        }
        else if (Math.round((reactionValue + memoryValue + verbalValue + visualValue) / 4) > 30){
            document.getElementById("rating").innerHTML ="You can do better";
        }
        else if (Math.round((reactionValue + memoryValue + verbalValue + visualValue) / 4) > 50){
            document.getElementById("rating").innerHTML ="Good";
        }
        else if (Math.round((reactionValue + memoryValue + verbalValue + visualValue) / 4) > 70){
            document.getElementById("rating").innerHTML ="Great";
        }
        else if (Math.round((reactionValue + memoryValue + verbalValue + visualValue) / 4) > 80){
            document.getElementById("rating").innerHTML ="Perfect!";
        }
    }    
}

document.querySelector("button").addEventListener("click", () => rating());

function rank() {
    const reactionValue = Number(document.getElementById("reactionValue").value);
    const memoryValue = Number(document.getElementById("memoryValue").value);
    const verbalValue = Number(document.getElementById("verbalValue").value);
    const visualValue = Number(document.getElementById("visualValue").value);

    if(reactionValue == "" || reactionValue > 100 || reactionValue < 0 || memoryValue == "" || memoryValue > 100 || memoryValue < 0 || verbalValue == "" || verbalValue > 100 || verbalValue < 0 || visualValue == "" || visualValue > 100 || visualValue < 0){
        document.getElementById("rank").innerHTML = "Please enter a value from 0 to 100, or press 'up' or 'down' arrow key on the input"; 
    }
    else{
        if (Math.round((reactionValue + memoryValue + verbalValue + visualValue) / 4) <= 30){
            document.getElementById("rank").innerHTML ="You scored lower than 80% of the people who have taken these tests.";
        }
        else if (Math.round((reactionValue + memoryValue + verbalValue + visualValue) / 4) > 30){
            document.getElementById("rank").innerHTML ="You scored lower than 60% of the people who have taken these tests.";
        }
        else if (Math.round((reactionValue + memoryValue + verbalValue + visualValue) / 4) > 50){
            document.getElementById("rank").innerHTML ="You scored higher than 50% of the people who have taken these tests.";
        }
        else if (Math.round((reactionValue + memoryValue + verbalValue + visualValue) / 4) > 70){
            document.getElementById("rank").innerHTML ="You scored higher than 65% of the people who have taken these tests.";
        }
        else if (Math.round((reactionValue + memoryValue + verbalValue + visualValue) / 4) > 80){
            document.getElementById("rank").innerHTML ="You scored higher than 90% of the people who have taken these tests.";
        }
    }    
}

document.querySelector("button").addEventListener("click", () => rank());