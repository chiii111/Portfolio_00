$(function(){
    
    //-------------------------------------------sec_mainNav-------------------------------------------
    // -------------------------------------------sec_mainKv-------------------------------------------
    let $systemColor_color = $(".systemColor_color");
    let $workBg_systemColor_item = $(".workBg_systemColor_item");
    let $systemColor_hex = $(".workBg_systemColor_item").find("span").text();
    console.log($systemColor_hex);
    $systemColor_color.css("background-color",$systemColor_hex);


    // $(".workBg_systemColor_item").click(function(){
    //     let workBg_systemColor_index = $(this).index();
    //     console.log(workBg_systemColor_index)
    // })
})