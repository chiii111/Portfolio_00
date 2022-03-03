$(function(){
    
    let $window = $(window)
    let $goToTop_btn = $(".goToTop_btn");
    let $mainNavNextSec = $(".sec_mainNav + section");
    let goToTopHeight = $mainNavNextSec.offset().top;
    console.log(goToTopHeight)
    $goToTop_btn.click(function(){
        $window.scrollTop(goToTopHeight);
    })
    
})