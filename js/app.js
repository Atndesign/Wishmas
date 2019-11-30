//global
var step1Container = document.querySelector(".step1");
var step2Container = document.querySelector(".step2");
var step3Container = document.querySelector(".step3");
var step4Container = document.querySelector(".step4");

//step 1
var choices = document.querySelectorAll('.choice-img-container > img')
var choiceArr = Array.from(choices);
var imgLink;
var nexBtn = document.getElementById("step1") 
choices.forEach(img => {
    img.addEventListener("click", function(){
        
        removeClass(choices,"active");
        removeClass(choices,"checkedAnim");
        img.classList.add("active")
        img.classList.add("checkedAnim");
        imgLink = img.src;
        if(imgLink != null){
            nexBtn.disabled = false
        }
    })
})
nexBtn.addEventListener("click",function(){
    step1Container.style.display = "none";
})

function removeClass(array,classname){
    array.forEach(element => {
        element.classList.remove(classname);
    });
}
//step 2

//step 3

//step 4
