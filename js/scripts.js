$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });          
});

$(document).ready(function(){
    $("#reserve").click(function(){
      $("#reserveModal").modal("toggle");
    });
});

$(document).ready(function(){
    $("#login").click(function(){
        $("#loginModal").modal("toggle");
    });
});

$(document).ready(function(){
    $("#rmodal-close").click(function(){
        $("#reserveModal").modal("hide");
    });
});

$(document).ready(function(){
    $("#lmodal-close").click(function(){
        $("#loginModal").modal("hide");
    });
});

$(document).ready(function(){
    $("#rmodal-close2").click(function(){
        $("#reserveModal").modal("hide");
    });
});

$(document).ready(function(){
    $("#lmodal-close2").click(function(){
        $("#loginModal").modal("hide");
    });
});