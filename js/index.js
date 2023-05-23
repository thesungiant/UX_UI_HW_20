$(".arrow").on("click", function(){
   document.querySelector('.case-studies').scrollIntoView({
    behavior: 'smooth'});
});

$(".back-to-top").on("click", function(){
    document.querySelector('header').scrollIntoView({
     behavior: 'smooth'});
 });

$(".arrow2").on("click", function(){
    document.querySelector('.my-skills').scrollIntoView({
     behavior: 'smooth'});
 });