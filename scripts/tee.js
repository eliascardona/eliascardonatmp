let msgBox = document.getElementById("msg");
let corrAns="corr";
let arr = ["1", "2", "corr", "3"];

arr.map(item => {
    switch (item) {
        case "corr":
            msgBox.innerText="you got it"
            break;
    
        default:
            msgBox.innerText="try again"
            break;
    }
})