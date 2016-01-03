$(document).ready(function() {
    $('img').mouseenter(function() {
       $(this).animate({
           width: '+=820px'
       });
   });
   $('img').mouseenter(function() {
       $(this).animate({
           height: '+=600px'
       });
   });
      $('img').mouseleave(function() {
       $(this).animate({
           width: '-=820px'
       }); 
   });
     $('img').mouseleave(function() {
       $(this).animate({
           height: '-=600px'
       }); 
   });
  
});
