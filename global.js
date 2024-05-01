gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,MotionPathPlugin,TextPlugin);


var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function() {
  this.classList.toggle("is-active");
}, false);

document.querySelectorAll("nav a").forEach((e, index) => {
  e.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1, 
      scrollTo:{
        y:"#section" + (index + 1)
      }
    });
  });
});


let outcomeIntro = Observer.create({
  type: "wheel,touch,pointer",
  wheelSpeed: 1,
  onDown: () => studentScrollDown(),
  onUp: () => studentScrollUp(),
  lockAxis: true,
  preventDefault: true 
});


function studentScrollDown() {
  gsap.to("#students" , {
    duration: 3,
    xPercent: 110,
    ease: "linear"
  });

  gsap.to("#bg_front", {
    duration: 2,
    // opacity: 0,
    xPercent: -100,
    ease: "linear"
  });

  gsap.to("#bg_back", {
    duration: 2,
    // opacity: 1,
    ease: "linear"
  });

  gsap.to("#title", {
    duration: 2,
    opacity: 1,
    // yPercent: 150,
    ease: "linear",
    onComplete: () => {
      outcomeIntro.disable();
    }
  });
}

function studentScrollUp() {
  gsap.to("#students" , {
    duration: 3,
    xPercent: 0,
    ease: "linear"
  });

  gsap.to("#bg_front", {
    duration: 2,
    // opacity: 1,
    xPercent: 0,
    ease: "linear"
  });

  gsap.to("#bg_back", {
    duration: 2,
    // opacity: 0,
    ease: "linear"
  });

  gsap.to("#title", {
    duration: 2,
    opacity: 0,
    // yPercent: 0,
    ease: "linear"
  });
}



// let smoother = ScrollSmoother.create({
//   wrapper: '#smooth-wrapper',
//   content: '#smooth-content'
// })

// Get each Panel
let basis = gsap.utils.toArray(".basis");
// Set Panels to horizontally scroll
gsap.to(basis, {
  xPercent: -100 * (basis.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".basis-container",
    snap: 1 / (basis.length - 1),
    pin: true,
    scrub: 1,
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=5000"
  }
});

const container = document.querySelector(".basis-h1-mask-container");

document.body.addEventListener("mousemove", e => {
  const x = e.clientX;
  const y = e.clientY - 35;
  gsap.to(container, {
    y: y
  });
  gsap.to(".basis-h1-mask", {
    y: -y
  });
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





let sections = gsap.utils.toArray(".panel");
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".school-container",
    snap: 1 / (sections.length - 1),
    pin: true,
    scrub: 1,
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=5000"
  }
});


let locations = gsap.utils.toArray(".location");
gsap.to(locations, {
  xPercent: -100 * (locations.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".location-container",
    snap: 1 / (locations.length - 1),
    pin: true,
    scrub: 1,
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=4000"
  }
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




let testing = gsap.utils.toArray(".testing");
gsap.to(testing, {
  xPercent: -100 * (testing.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".testing-container",
    snap: 1 / (testing.length - 1),
    pin: true,
    scrub: 1,
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=5000"
  }
});

let graduate = gsap.utils.toArray(".graduate");
gsap.to(graduate, {
  xPercent: -100 * (graduate.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".graduate-container",
    snap: 1 / (graduate.length - 1),
    pin: true,
    scrub: 1,
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3000"
  }
});

let testimonial = gsap.utils.toArray(".testimonial");
gsap.to(testimonial, {
  xPercent: -100 * (testimonial.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".testimonial-container",
    snap: 1 / (testimonial.length - 1),
    pin: true,
    scrub: 1,
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3000"
  }
});




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