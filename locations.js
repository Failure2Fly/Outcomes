

// Arizona Locations

const arizonaSVG = document.querySelector('#Arizona');

arizonaSVG.addEventListener("click", function() {
  gsap.to(arizonaSVG, {attr:{viewBox: "0 0 691.864 833"}});
});


const ahwatukee = document.querySelector('#ahwatukee');
const ahwatukeePin = document.querySelector('#ahwatukee-pin');
const ahwatukeeContent = document.querySelector('#ahwatukee-content');

ahwatukee.addEventListener("click", function() {
  gsap.to(arizonaSVG, {attr:{viewBox:"265 450 100 100"}});
  tippy(ahwatukeePin, {
    trigger: 'click',
    triggerTarget: ahwatukee, 
    content: ahwatukeeContent.innerHTML,
    placement: 'bottom',
    allowHTML: true,
    zIndex: 100
  });
});



const chandler = document.querySelector('#chandler');
const chandlerPin = document.querySelector('#chandler-pin');
const chandlerContent = document.querySelector('#chandler-content');

chandler.addEventListener("click", function() {
  gsap.to(arizonaSVG, {attr:{viewBox:"275 475 100 100"}});
});

tippy(chandlerPin, {
  trigger: 'click',
  triggerTarget: chandler,
  content: chandlerContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});



const chandlerPrimaryNorth = document.querySelector('#chandler-primary-north');
const chandlerPrimaryNorthPin = document.querySelector('#chandler-primary-north-pin');
const chandlerPrimaryNorthContent = document.querySelector('#chandler-primary-north-content');

chandlerPrimaryNorth.addEventListener("click", function() {
  gsap.to(arizonaSVG, {attr:{viewBox:"285 460 100 100"}});
});

tippy(chandlerPrimaryNorthPin, {
  trigger: 'click',
  triggerTarget: chandlerPrimaryNorth,
  content: chandlerPrimaryNorthContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});



const mesa = document.querySelector('#mesa');
const mesaPin = document.querySelector('#mesa-pin');
const mesaContent = document.querySelector('#mesa-content');

mesa.addEventListener("click", function() {
  gsap.to(arizonaSVG, {attr:{viewBox:"305 460 100 100"}});
  tippy(mesaPin, {
    // trigger: 'click',
    sticky: true,
    triggerTarget: mesa,
    content: mesaContent.innerHTML,
    placement: 'bottom',
    allowHTML: true,
    maxWidth: 300,
    zIndex: 100
  });
});



const scottsdalePrimaryWest = document.querySelector('#scottsdale-primary-west');
const scottsdalePrimaryWestPin = document.querySelector('#scottsdale-primary-west-pin');
const scottsdalePrimaryWestContent = document.querySelector('#scottsdale-primary-west-content');

scottsdalePrimaryWest.addEventListener("click", function() {
  gsap.to(arizonaSVG, {attr:{viewBox:"280 425 100 100"}});
});
tippy(scottsdalePrimaryWestPin, {
  trigger: 'click',
  triggerTarget: scottsdalePrimaryWest,
  content: scottsdalePrimaryWestContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  maxWidth: 300,
  zIndex: 100
});

















// Texas Locations


const texasSVG = document.querySelector('#Texas');

texasSVG.addEventListener("click", function() {
  gsap.to(texasSVG, {attr:{viewBox: "0 0 767.493 775.016"}});
});


const jackLewisJr = document.querySelector('#jack-lewis-jr');
const jackLewisJrPin = document.querySelector('#jack-lewis-jr-pin');
const jackLewisJrContent = document.querySelector('#jack-lewis-jr-content');

tippy(jackLewisJrPin, {
  trigger: 'click',
  triggerTarget: jackLewisJr,
  content: jackLewisJrContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});


jackLewisJr.addEventListener("click", function(event) {
  event.preventDefault();
  gsap.to(texasSVG, {attr:{viewBox:"415 455 100 100"}});

  tippy(jackLewisJrPin, {
    trigger: 'click',
    triggerTarget: jackLewisJr,
    content: jackLewisJrContent.innerHTML,
    placement: 'bottom',
    allowHTML: true,
    zIndex: 100
  });
});



const medical = document.querySelector('#medical');
const medicalPin = document.querySelector('#medical-pin');
const medicalContent = document.querySelector('#medical-content');

medical.addEventListener("click", function() {
  gsap.to(texasSVG, {attr:{viewBox:"420 450 100 100"}});
  tippy(medicalPin, {
    trigger: 'click',
    triggerTarget: medical,
    content: medicalContent.innerHTML,
    placement: 'bottom',
    allowHTML: true,
    zIndex: 100
  });
});