
// Arizona Locations

const arizonaSVG = document.querySelector('#arizona');
const arizonaZoomOut = document.querySelector('.arizona-zoom-out');


arizonaZoomOut.addEventListener("click", function() {
  gsap.to(texasSVG, {
    attr:{viewBox:"0 0 691.864 833"},
    duration: 1
  });
  gsap.to(arizonaZoomOut, {
    opacity: 0
  });  
});


const ahwatukee = document.querySelector('#ahwatukee');
const ahwatukeePin = document.querySelector('#ahwatukee-pin');
const ahwatukeeContent = document.querySelector('#ahwatukee-content');

ahwatukee.addEventListener("click", function() {
  gsap.to(arizonaSVG, {
    attr:{viewBox:"265 450 100 100"},
  });
  gsap.to(arizonaZoomOut, {
    opacity: 1
  });  
});
tippy(ahwatukeePin, {
  trigger: 'click',
  triggerTarget: ahwatukeePin, 
  content: ahwatukeeContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});


const chandler = document.querySelector('#chandler');
const chandlerPin = document.querySelector('#chandler-pin');
const chandlerContent = document.querySelector('#chandler-content');

chandler.addEventListener("click", function() {
  gsap.to(arizonaSVG, {
    attr:{viewBox:"275 475 100 100"},
  });
  gsap.to(arizonaZoomOut, {
    opacity: 1
  });  
});
tippy(chandlerPin, {
  trigger: 'click',
  triggerTarget: chandlerPin,
  content: chandlerContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});



const chandlerPrimaryNorth = document.querySelector('#chandler-primary-north');
const chandlerPrimaryNorthPin = document.querySelector('#chandler-primary-north-pin');
const chandlerPrimaryNorthContent = document.querySelector('#chandler-primary-north-content');

chandlerPrimaryNorth.addEventListener("click", function() {
  gsap.to(arizonaSVG, {
    attr:{viewBox:"285 460 100 100"},
  });
  gsap.to(arizonaZoomOut, {
    opacity: 1
  });  
});
tippy(chandlerPrimaryNorthPin, {
  trigger: 'click',
  triggerTarget: chandlerPrimaryNorthPin,
  content: chandlerPrimaryNorthContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});



const mesa = document.querySelector('#mesa');
const mesaPin = document.querySelector('#mesa-pin');
const mesaContent = document.querySelector('#mesa-content');

mesa.addEventListener("click", function() {
  gsap.to(arizonaSVG, {
    attr:{viewBox:"305 460 100 100"},
  });
  gsap.to(arizonaZoomOut, {
    opacity: 1
  });  
});
tippy(mesaPin, {
  trigger: 'click',
  sticky: true,
  triggerTarget: mesaPin,
  content: mesaContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});




const scottsdalePrimaryWest = document.querySelector('#scottsdale-primary-west');
const scottsdalePrimaryWestPin = document.querySelector('#scottsdale-primary-west-pin');
const scottsdalePrimaryWestContent = document.querySelector('#scottsdale-primary-west-content');

scottsdalePrimaryWest.addEventListener("click", function() {
  gsap.to(arizonaSVG, {
    attr:{viewBox:"280 425 100 100"},
  });
  gsap.to(arizonaZoomOut, {
    opacity: 1
  });  
});
tippy(scottsdalePrimaryWestPin, {
  trigger: 'click',
  triggerTarget: scottsdalePrimaryWestPin,
  content: scottsdalePrimaryWestContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  maxWidth: 300,
  zIndex: 100
});


















// Texas Locations


const texasSVG = document.querySelector('#Texas');
const texasZoomOut = document.querySelector('.texas-zoom-out');


texasZoomOut.addEventListener("click", function() {
  gsap.to(texasSVG, {
    attr:{viewBox:"0 0 767.493 775.016"},
    duration: 1
  });
  gsap.to(texasZoomOut, {
    opacity: 0
  });  
});



const jackLewisJr = document.querySelector('#jack-lewis-jr');
const jackLewisJrPin = document.querySelector('#jack-lewis-jr-pin');
const jackLewisJrContent = document.querySelector('#jack-lewis-jr-content');

jackLewisJr.addEventListener("click", function() {
  gsap.to(texasSVG, {
    attr:{viewBox:"415 460 100 100"},
    duration: 1
  });
  gsap.to(texasZoomOut, {
    opacity: 1
  });  
});
tippy(jackLewisJrPin, {
  trigger: 'click',
  triggerTarget: jackLewisJrPin,
  content: jackLewisJrContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});


const medical = document.querySelector('#medical');
const medicalPin = document.querySelector('#medical-pin');
const medicalContent = document.querySelector('#medical-content');

medical.addEventListener("click", function() {
  gsap.to(texasSVG, {
    attr:{viewBox:"420 455 100 100"},
    duration: 1
  });
  gsap.to(texasZoomOut, {
    opacity: 1
  });  
});
tippy(medicalPin, {
  trigger: 'click',
  triggerTarget: medicalPin,
  content: medicalContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});


const northeast = document.querySelector('#northeast');
const northeastPin = document.querySelector('#northeast-pin');
const northeastContent = document.querySelector('#northeast-content');

northeast.addEventListener("click", function() {
  gsap.to(texasSVG, {
    attr:{viewBox:"435 450 100 100"},
    duration: 1
  });
  gsap.to(texasZoomOut, {
    opacity: 1
  });  
});
tippy(northeastPin, {
  trigger: 'click',
  triggerTarget: northeastPin,
  content: northeastContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});


const northCentral = document.querySelector('#north-central');
const northCentralPin = document.querySelector('#north-central-pin');
const northCentralContent = document.querySelector('#north-central-content');

northCentral.addEventListener("click", function() {
  gsap.to(texasSVG, {
    attr:{viewBox:"425 450 100 100"},
    duration: 1
  });
  gsap.to(texasZoomOut, {
    opacity: 1
  });  
});
tippy(northCentralPin, {
  trigger: 'click',
  triggerTarget: northCentralPin,
  content: northCentralContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});


const shavano = document.querySelector('#shavano');
const shavanoPin = document.querySelector('#shavano-pin');
const shavanoContent = document.querySelector('#shavano-content');

shavano.addEventListener("click", function() {
  gsap.to(texasSVG, {
    attr:{viewBox:"425 450 100 100"},
    duration: 1
  });
  gsap.to(texasZoomOut, {
    opacity: 1
  });  
});
tippy(shavanoPin, {
  trigger: 'click',
  triggerTarget: shavanoPin,
  content: shavanoContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});


const benbrook = document.querySelector('#benbrook');
const benbrookPin = document.querySelector('#benbrook-pin');
const benbrookContent = document.querySelector('#benbrook-content');

benbrook.addEventListener("click", function() {
  gsap.to(texasSVG, {
    attr:{viewBox:"490 225 100 100"},
    duration: 1
  });
  gsap.to(texasZoomOut, {
    opacity: 1
  });  
});
tippy(benbrookPin, {
  trigger: 'click',
  triggerTarget: benbrookPin,
  content: benbrookContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});


const austin = document.querySelector('#austin');
const austinPin = document.querySelector('#austin-pin');
const austinContent = document.querySelector('#austin-content');

austin.addEventListener("click", function() {
  gsap.to(texasSVG, {
    attr:{viewBox:"475 385 100 100"},
    duration: 1
  });
  gsap.to(texasZoomOut, {
    opacity: 1
  });  
});
tippy(austinPin, {
  trigger: 'click',
  triggerTarget: austinPin,
  content: austinContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});


const cedarPark = document.querySelector('#cedar-park');
const cedarParkPin = document.querySelector('#cedar-park-pin');
const cedarParkContent = document.querySelector('#cedar-park-content');

cedarPark.addEventListener("click", function() {
  gsap.to(texasSVG, {
    attr:{viewBox:"465 380 100 100"},
    duration: 1
  });
  gsap.to(texasZoomOut, {
    opacity: 1
  });  
});
tippy(cedarParkPin, {
  trigger: 'click',
  triggerTarget: cedarParkPin,
  content: cedarParkContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});


const pflugerville = document.querySelector('#pflugerville');
const pflugervillePin = document.querySelector('#pflugerville-pin');
const pflugervilleContent = document.querySelector('#pflugerville-content');

pflugerville.addEventListener("click", function() {
  gsap.to(texasSVG, {
    attr:{viewBox:"480 385 100 100"},
    duration: 1
  });
  gsap.to(texasZoomOut, {
    opacity: 1
  });  
});
tippy(pflugervillePin, {
  trigger: 'click',
  triggerTarget: pflugervillePin,
  content: pflugervilleContent.innerHTML,
  placement: 'bottom',
  allowHTML: true,
  zIndex: 100
});