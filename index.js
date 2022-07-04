let correctArray = ['Russia', 'El llibre Guiness dels Records (xd)', 
    'EEUU', 'Els ulls', 'L estruc', 'La llengua', 'Més de 20000', 'Mohammed'] 

var button = document.getElementById("submit")
var incorrect = 0

button.onclick = () => {

    let q1 = document.getElementById("form1").value;
    let q2 = document.getElementById("form2").value;
    let q3 = document.getElementById("form3").value;
    let q4 = document.getElementById("form4").value;
    let q5 = document.getElementById("form5").value;
    let q6 = document.getElementById("form6").value;
    let q7 = document.getElementById("form7").value;
    let q8 = document.getElementById("form8").value;
    let responses = [q1, q2, q3, q4, q5, q6, q7, q8]

    incorrect = 0
    responses.forEach((elem, i) => {
        if (correctArray[i] !== elem) {
            incorrect++
        }
    })
    if (incorrect == 0)
        window.location.href = "./qr.html";
    else {
        var msg = document.getElementById("msg")
        msg.style.display = "block"
        
        var to = setTimeout(function () {
            msg.style.display = "none"
        }, 3000);
    }
    
}
