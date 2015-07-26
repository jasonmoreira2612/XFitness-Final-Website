//1
$("#photoShow").ready(function(){
    var count = 0;
    console.log("Imagen de index numero: "+count);
    $("#nexto").click(function(){
        count++;
        while(count>3){
        count--;
        }
        var a = $("#photoShow div");
        a.removeClass('current');
        a.eq(count).addClass('current');
        console.log("Imagen de index numero: "+count);
    });

    $("#prevo").click(function(){
        count--;
        while(count<0){
        count++;
        }
        var a = $("#photoShow div");
        a.removeClass('current');
        a.eq(count).addClass('current');
        console.log("Imagen de index numero: "+count);
    });
});
