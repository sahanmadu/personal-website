$(document).ready(function () {
    $(document).click(function (event) {
        var click = $(event.target);
        var _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});




function changeFunction(){
    document.body.style.backgroundColor = "black";
    document.getElementById("pc2").style.color = "white";
    
    
}

function changeFunction1(){
    document.body.style.backgroundColor = "red";
    document.getElementById("pc2").style.color = "white";
    
    
}

function changeFunction2(){
    document.body.style.backgroundColor = "white";
    document.getElementById("pc2").style.color = "black";
    
    
}




