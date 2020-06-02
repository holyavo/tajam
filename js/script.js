$(document).ready(function () {
   $('.menu-burger').click(function (event) {
       $('.menu-burger, .navbar__navigation').toggleClass('active');
       $('body').toggleClass('lock');
   });
});