//hides the initial divs
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip({html:true}); 
    
    $(".moreInfoZedDiv").toggle();
    $(".moreInfoDivClass").toggle();
    $(".moreInfoDivClassHire").toggle();
});

//toggles to show the div on click
$('.moreInfoButtonClass').click(function () {
    $(".moreInfoDivClass").toggle();
    

});

//toggles to show the div on click
$('.moreInfoButtonZED').click(function () {
    $(".moreInfoZedDiv").toggle();

});

$('.moreInfoButtonClassHire').click(function () {
    $(".moreInfoDivClassHire").fadeToggle("fast", "linear");
    
});
