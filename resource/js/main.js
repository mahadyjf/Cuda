$(document).ready(function(){

    //Sticky Menu
    $('.js--services-section').waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    });

    //mix it up(protfolio section)
    var mixer = mixitup('.container');

    //Smooth Scroll For ie/ edge/ safari
    $("a").on('click', function(event){
        if(this.hash !== ""){
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            })
        }
    });
});

function opennav(){
    document.getElementById("mynav").style.width = "100%";
}
function closenav(){
    document.getElementById("mynav").style.width = "0%";
}