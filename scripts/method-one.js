let msgBox = document.getElementById("msg");
let quiz = document.getElementById("quiz");

/*
    Here it is supposed to go through the events that occurred in any radius
    In other words, use any method to find out which input was selected
*/

//Then

//Here you could use other type of maping or looping
//Point here is walk through array

for (const element of quiz.elements) {
    switch (element) {
        case (element.value==="lele"):
            msgBox.innerText="yes"
            break;
    
        default:
            msgBox.innerText="no"
            break;
    }
}