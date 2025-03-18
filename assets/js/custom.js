$(document).ready(function () { 
    $(".toggle").click(function () {
      $("header").addClass("menuToggle");
    });
    $(".close").click(function () {
      $("header").removeClass("menuToggle");
    });
  
  });
  $('.testimonial-slide').slick({
    infinite: true,
    dots: false,
    arrows: false,
  });
  

  $('.latest-wrap').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const updateCount = () => {
      const target = parseFloat(counter.getAttribute("data-target"));
      const suffix = counter.getAttribute("data-suffix") || "";
      let count = parseFloat(counter.innerText.replace(/\D/g, "")) || 0;
      
      const increment = target / 100;
      
      if(count < target) {
        count += increment;
        if(count > target) count = target;
        counter.innerText = Math.floor(count).toLocaleString() + suffix;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target.toLocaleString() + suffix;
      }
    };
    
    updateCount();
  });
});
AOS.init({
    duration: 1200,
    once: true
  });
