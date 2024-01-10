window.onload = init;
var interval = 4000;

function init(){
    var value =  document.querySelectorAll('.num');
    value.forEach(element => {
        var startVal = 0;
        var finalVal =parseInt(element.getAttribute('val'));
        var duration = Math.floor(interval/finalVal);
        var counter = setInterval(function () {
            startVal+=1;
            element.textContent=startVal;
            if(startVal===finalVal){
                clearInterval(counter);
            }
        },duration);
    });
}