$(document).ready(function(){
    var click = 0;
    $("select").each(function(){
        $("select").change(function(){
            click++;
            console.log($("select").find("option").length);

            if(click < $("select").find("option").length){
                $(this).next().removeAttr("disabled");
                console.log(click)
            }
            else{
                $(this).nextAll().attr("disabled","disabled");
                click = 0;
            }
        })
    })
    // console.log(disable)
});