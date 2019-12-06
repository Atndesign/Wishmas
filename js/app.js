//global

var step1Container = document.querySelector("#step1");
var step2Container = document.querySelector("#step2");
var step3Container = document.querySelector("#step3");
var step4Container = document.querySelector("#step4");
var step5Container = document.querySelector("#step5");
var nexBtn1 = document.getElementById("nextStep1"); 
var nexBtn2 = document.getElementById("nextStep2"); 
var nexBtn3= document.getElementById("nextStep3");
var nexBtn4 = document.getElementById("nextStep4");
var nexBtn5 = document.getElementById("nextStep5");

var steps = [step1Container,step2Container,step3Container,step4Container,step5Container];
var nextBtns = [nexBtn1,nexBtn2,nexBtn3,nexBtn4,nexBtn5];

var resultImg = document.getElementById("resultImg");

//Final vars
var bg,sender,receiver,messageText;

//step 1
var choices = document.querySelectorAll('.choice-img-container > img')
var choiceArr = Array.from(choices);
var imgLink;


choices.forEach(img => {
    img.addEventListener("click", function(){
        
        removeClass(choices,"active");
        removeClass(choices,"checkedAnim");
        img.classList.add("active")
        img.classList.add("checkedAnim");
        imgLink = img.src;
        if(imgLink != null){
            nexBtn1.disabled = false
        }
    })
})
nexBtn1.addEventListener("click",function(){
    bg = imgLink;
    changeStep(2)
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

    if(message == ""){
        var conf = confirm("Send a empty text ?")
        receiver = `Hello ${receiver}!`;
        sender = `${sender} wish you a merry Christmas`;

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
        sender = `${sender} wish you a merry Christmas, here is the message:`;
        messageDisplay.innerText = message;
        changeStep(5)
    }
    senderDisplay.innerText = sender;
    receiverDisplay.innerText = receiver;
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
