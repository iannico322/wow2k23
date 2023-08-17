$(window).on("load", function () {
  $(".loading").fadeOut(2000);

  $(".main").fadein(2000);
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
  

  $(document).ready(function() {
    var degrees = [0, 90, 180, 270];
    $('.bg img').each(function(index) {
      $(this).addClass('rotate-' + degrees[index % degrees.length]);
    });
  });

  
  $(document).ready(function() {
    $('.bg img').each(function() {
      var x = Math.random() * 50 - 25; // random x position
      var y = Math.random() * 200 - 25; // random y position
      var deg = Math.random() * 360; // random rotation degree
      $(this).css('transform', 'translate(' + x + 'px, ' + y + 'px) rotate(' + deg + 'deg)');
    });
  });


  let menusOption = document.querySelector('.hidden-menus')
  const menu = document.querySelector('#menu')

  let ishow = false;

  menu.addEventListener('click',()=>{
    console.log("hi")

    ishow? menusOption.style.display="none" : menusOption.style.display="flex";
    ishow=!ishow
   
  })
  


