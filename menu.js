$(".menuController").on("click", function(){
    for(var i=1; i<9; i++) {
        $(".menuItem"+i).toggleClass('menuItem'+i+"Visible");
    }
})