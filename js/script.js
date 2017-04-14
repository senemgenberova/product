$(document).ready(function(){
    var change = false;
    console.log(change);
    $("select").each(function(){
        $("select").change(function(){
            if(change == false){
                change = true;
                $(this).nextAll().attr("disabled","disabled");
                $(this).next().nextAll().css("background","#ccc")
                $(this).nextAll().prop('selectedIndex', 0);
            }
            else{
                change = false;
                $(this).next().removeAttr("disabled");
                $(this).next().css("background","white")

            }
        })
    })
});