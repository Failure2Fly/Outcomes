gsap.registerPlugin(Flip, ScrollTrigger, ScrollSmoother, Observer, ScrollToPlugin, MotionPathPlugin, TextPlugin, SplitText, DrawSVGPlugin, CustomEase, CustomBounce);

ScrollTrigger.normalizeScroll(true);

let smoother = ScrollSmoother.create({ 
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  speed: .5,
  smooth: 2,
  effects: true,
  normalizeScroll: true
});

var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function() {
  this.classList.toggle("is-active");
}, false);

document.querySelectorAll("nav a").forEach((e, index) => {
  e.addEventListener("click", () => {
    smoother.scrollTo(
      "#section" + (index + 1),
    );
    hamburger.classList.toggle("is-active");
  });
});



// ScrollSmoother.create({ 
//   wrapper: '#smooth-wrapper',
//   content: '#smooth-content',
//   speed: .5,
//   // smooth: 2,
//   effects: true,
//   normalizeScroll: true
// });






// let outcomeIntro = Observer.create({
//   type: "wheel,touch,pointer",
//   wheelSpeed: 1,
//   onDown: () => studentScrollDown(),
//   onUp: () => studentScrollUp(),
//   lockAxis: true,
//   preventDefault: true, 
// });


gsap.timeline({scrollTrigger: {
    trigger: "#home",
    pin: true,
    scrub: 1,
  }
})
.to("#bg_back", {
  duration: 2,
  ease: "linear",
})
.to("#students" , {
  duration: 3,
  xPercent: 110,
  ease: "linear"
})
.to("#bg_front", {
  duration: 2,
  xPercent: -100,
  ease: "linear"
}, '<')
.to("#title", {
  duration: 3,
  opacity: 1,
  ease: "linear",
});




// let smoother = ScrollSmoother.create({
//   wrapper: '#smooth-wrapper',
//   content: '#smooth-content'
// })

// Get each Panel
// let basis = gsap.utils.toArray(".basis");
// // Set Panels to horizontally scroll
// gsap.to(basis, {
//   xPercent: -100 * (basis.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".basis-container",
//     snap: 1 / (basis.length - 1),
//     pin: true,
//     scrub: 1,
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=2000"
//   }
// });

// const container = document.querySelector(".basis-h1-mask-container");

// document.body.addEventListener("mousemove", e => {
//   const x = e.clientX;
//   const y = e.clientY - 35;
//   gsap.to(container, {
//     y: y
//   });
//   gsap.to(".basis-h1-mask", {
//     y: -y
//   });
// });


// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".basis.one",
//     scrub: 1,
//     start: "top top",
//     end: "+=1200",
//     toggleActions: "play pause play reset",
//     markers: true,
//   },
// });


let basisText = new SplitText(".basis-title", {
  type: "words"
});


gsap.from(basisText.words, {
  opacity: 0.05,
  stagger: .2,
  scrollTrigger: {
    trigger: '.basis.one',
    start: "-20%",
    end: "5%",
    scrub: true,
  },
});



gsap.fromTo(".kids1", { 
  xPercent: 100,
  duration: 3,
  ease: "power1.inOut",
  scrollTrigger: { 
    trigger: ".basis.one",
    toggleActions: "restart none restart none",
    start: "top 30%",
    // markers: true,
  },
}, 
{ 
  xPercent: 0,
  duration: 3,
  ease: "power1.inOut",
  scrollTrigger: { 
    trigger: ".basis.one",
    toggleActions: "restart none restart none",
    bottom: "top 80%",
    // markers: true,
  },
});



gsap.fromTo(".kids2", { 
  xPercent: -100,
  duration: 2,
  ease: "power1.inOut",
  scrollTrigger: { 
    trigger: ".basis.two",
    toggleActions: "restart none restart none",
    start: "top 30%",
  },
}, 
{ 
  xPercent: 0,
  duration: 2,
  ease: "power1.inOut",
  scrollTrigger: { 
    trigger: ".basis.two",
    toggleActions: "restart none restart none",
    start: "top 80%",
  },
});






// const introText = document.querySelector(".letter-title");

// gsap.to(introText, {
//   scrollTrigger: {
//     trigger: introText,
//     toggleActions: "restart none restart none"
//   },
//   duration: 6,
//   text: "Welcome to the 2023–24 issue of Inputs & Outcomes! Published mere months after our network of exceptional public charter schools celebrated its 25th anniversary, we are also tipping our (10-gallon) hats to our 10th anniversary in the state of Texas.",
//   ease: "sine.inOut",
//   y: -50
// });





// let sections = gsap.utils.toArray(".panel");
// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".school-container",
//     snap: 1 / (sections.length - 1),
//     pin: true,
//     scrub: 1,
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=1000"
//   }
// });


// let locations = gsap.utils.toArray(".location");
// gsap.to(locations, {
//   xPercent: -100 * (locations.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".location-container",
//     snap: 1 / (locations.length - 1),
//     pin: true,
//     scrub: 1,
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=3000"
//   }
// });


CustomBounce.create("myBounce", {
  strength: .6,
  squash: 3,
  squashID: "myBounce-squash",
});

let arizonaPins = document.querySelectorAll(".arizonaBounceEffect");
let texasPins = document.querySelectorAll(".texasBounceEffect");
let count = 0.05;

arizonaPins.forEach((arizonaPin) => {
  gsap.from(arizonaPin, { 
    duration: 3, 
    y: -200,
    delay: count,
    ease: "myBounce",
    scrollTrigger: { 
      trigger: '.location.one',
      scrub: 3,
      start: 'top 50%',
      end: 'bottom bottom',
      // markers: true,
    },
  });
  count = count + 0.05;
  //and do the squash/stretch at the same time:
  gsap.to(arizonaPin, {
    duration: 3,
    scaleX: 1.4,
    scaleY: 1.4,
    ease: "myBounce-squash",
    // transformOrigin: "center bottom",
    scrollTrigger: { 
      trigger: '.location.one',
      scrub: 3,
      start: 'top 50%',
      end: 'bottom bottom',
      // markers: true,
    },
  });
});

gsap.from("#Path_164", {
  duration: 2,
  stagger: 0.5, 
  drawSVG: 0,
  scrollTrigger: { 
    trigger: '.location.one',
    scrub: 1,
    start: 'left 50%',
    end: 'right right',
  },
});



texasPins.forEach((texasPin) => {
  gsap.from(texasPin, { 
    duration: 2, 
    y: -200,
    delay: count,
    ease: "myBounce",
    scrollTrigger: { 
      trigger: '.location.two',
      scrub: 3,
      start: 'left 50%',
      end: 'right right',
    },
  });
  count = count + 0.05;
  //and do the squash/stretch at the same time:
  gsap.to(texasPin, {
    duration: 2,
    scaleX: 1.4,
    scaleY: 0.6,
    ease: "myBounce-squash",
    transformOrigin: "center bottom",
    scrollTrigger: { 
      trigger: '.location.two',
      scrub: 3,
      start: 'left 50%',
      end: 'right right',
    },
  });
});

gsap.from("#Path_60", {
  duration: 2,
  stagger: 0.5, 
  drawSVG: 0,
  scrollTrigger: { 
    trigger: '.location.two',
    scrub: 1,
    start: 'left 50%',
    end: 'right right',
  },
});


// let test = gsap.timeline({scrollTrigger: {trigger: ".school-container"}}); 

// test.fromTo(
//     ".school-container",
//     {x: 0, y: 0},
//     { duration: 5, ease: "power1.inOut", motionPath:
//     { path: [{
//      x: 0, y: '20vh'}, 
//      {x: 20, y: '40vh'}, 
//      {x: 50, y: '60vh' }, 
//      {x: 30, y: '100vh'}]}
//   }, 
// );




// let testing = gsap.utils.toArray(".testing");
// gsap.to(testing, {
//   xPercent: -100 * (testing.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".testing-container",
//     snap: 1 / (testing.length - 1),
//     pin: true,
//     scrub: 1,
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=4000"
//   }
// });

// let graduate = gsap.utils.toArray(".graduate");
// gsap.to(graduate, {
//   xPercent: -100 * (graduate.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".graduate-container",
//     snap: 1 / (graduate.length - 1),
//     pin: true,
//     scrub: 1,
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=2000"
//   }
// });

// let testimonial = gsap.utils.toArray(".testimonial");
// gsap.to(testimonial, {
//   xPercent: -100 * (testimonial.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".testimonial-container",
//     snap: 1 / (testimonial.length - 1),
//     pin: true,
//     scrub: 1,
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=1000"
//   }
// });


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 6,
  infinite: true,
  loop: true,
  autoplay: true,
  grid: {
    fill: 'column',
    rows: 4,
  },
  breakpointBase: 'window',
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});
swiper.init();


$(function() {
  $(".box").on("mousedown", function(e) {
    const gate = $(this).children("div");
    $(this).children(".locker").hide();
    for (var i = 0; i < gate.length; i++) {
      if ($(gate[i]).hasClass("ovrl-left")) {
        $(gate[i]).toggleClass("move-right");
      }
      if ($(gate[i]).hasClass("ovrl-right")) {
        $(gate[i]).toggleClass("move-left");
      }
    }
    // removes the click event after reveling the image
    $(this).off();
  });
});

