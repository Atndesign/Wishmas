//global


//step 1
var choices = document.querySelectorAll('.choice-img-container > img')
var choiceArr = Array.from(choices);
var imgLink;

choices.forEach(img => {
    img.addEventListener("click", function(){
        if(imgLink != null){
            document.getElementById("step1").disabled = false
        }
        removeClass(choices,"active");
        img.classList.add("active")
        imgLink = img.src;
    })
})

function removeClass(array,classname){
    array.forEach(element => {
        element.classList.remove(classname);
    });
}
//step 2
//step 3
//step 4