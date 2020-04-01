var activateTestBtn = document.getElementById("activate-test");
var mainContent = document.getElementById("main-content");
var inputValue = document.getElementById("input-messages");
var checkLengthBtn = document.getElementById("check-length");
var count = document.getElementById("message-count-number");
var resetBtn = document.getElementById("reset");

mainContent.style.display="none";
activateTestBtn.onclick= function(){
    activateTestBtn.style.display ="none";
    mainContent.style.display = "block";
};

checkLengthBtn.onclick = function(){
    count.innerHTML = inputValue.value.length;
}

function reset(){
    mainContent.style.display="none";
    inputValue.value = "";
    count.innerHTML = 0;
    activateTestBtn.style.display ="block";
}
resetBtn.onclick = function(){
    reset();
}