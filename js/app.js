//global

var step1Container = document.querySelector("#step1");
var step2Container = document.querySelector("#step2");
var step3Container = document.querySelector("#step3");
var step4Container = document.querySelector("#step4");
var step5Container = document.querySelector("#step5");
//Next
var nexBtn1 = document.getElementById("nextStep1"); 
var nexBtn2 = document.getElementById("nextStep2"); 
var nexBtn3= document.getElementById("nextStep3");
var nexBtn4 = document.getElementById("nextStep4");
var nexBtn5 = document.getElementById("nextStep5");
//Previous
var prevBtn1 = document.getElementById("prevStep1"); 
var prevBtn2 = document.getElementById("prevStep2"); 
var prevBtn3= document.getElementById("prevStep3");
var prevBtn4 = document.getElementById("prevStep4");


var steps = [step1Container,step2Container,step3Container,step4Container,step5Container];
var resultImg = document.getElementById("resultImg");

//Final vars
var bg,sender,receiver,messageText;

//step 1
var choices = document.querySelectorAll('.choice-img-container > img')
var choiceArr = Array.from(choices);

choices.forEach(img => {
    img.addEventListener("click", function(){
        bg = img.src;
        changeStep(2)
    })
})
//step 2
nexBtn2.addEventListener("click",function(){
    var senderName = document.getElementById("senderName").value;
    if(senderName == ""){
        alert("I think you have a name")
        return
    }
    else{
        sender = senderName;
        changeStep(3)
    }
})


//step 3

nexBtn3.addEventListener("click",function(){
    var receiverName = document.getElementById("receiverName").value;
    if(receiverName == ""){
        alert("I think your receiver have a name")
        return
    }
    else{
        receiver = receiverName;
        changeStep(4)
    }
})

//step 4

nexBtn4.addEventListener("click",function(){
    var message = document.getElementById("message").value;
    // result
    var senderDisplay = document.getElementById("sender");
    var receiverDisplay = document.getElementById("receiver");
    var messageDisplay = document.getElementById("messageFinal");
    resultImg.style.backgroundImage = `url('${bg}')`;
    //Assignement
    sender = `${sender} wish you a merry Christmas!`;

    if(message == ""){
        var conf = confirm("Send a empty text ?")
        receiver = `Hello ${receiver}!`;

        if(conf){
            messageDisplay.innerText = message;
            changeStep(5)
        }
        else{
            return
        }
    }
    else{
        receiver = `Hello ${receiver}!`;
        messageDisplay.innerText = message;
        changeStep(5)
    }
    senderDisplay.innerText = sender;
    receiverDisplay.innerText = receiver;
    var downloadBtn = document.getElementById("downloadBtn");
    html2canvas(document.querySelector("#resultImg")).then(canvas => {
        var img = canvas.toDataURL("image/png");
        downloadBtn.href = img
    });
    var backToBegin = document.getElementById("backToBegin");
    backToBegin.addEventListener("click", function(){
        changeStep(1);
    })
})

//back
prevBtn1.addEventListener("click",function(){
    changeStep(1);
})
prevBtn2.addEventListener("click",function(){
    changeStep(2);
})
prevBtn3.addEventListener("click",function(){
    changeStep(3);
})

//Functions

function removeClass(array,classname){
    array.forEach(element => {
        element.classList.remove(classname);
    });
}
function changeStep(stepNbr){
    for(stepIndex = 0; stepIndex < steps.length; stepIndex++){
        if(stepIndex == stepNbr - 1){
            steps[stepIndex].style.display = "block";
        }
        else{
            steps[stepIndex].style.display = "none";
        }
    }
}
function getInputs(nodeName){
    var nodeElt = document.getElementById(nodeName)
    return nodeElt.innerText;
}
