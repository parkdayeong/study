'use strict';
//variable
const box1 = document.querySelector('#section1 .parallax__item__img');
const box2 = document.querySelector('#section2 .parallax__item__img');
const box3 = document.querySelector('#section3 .parallax__item__img');
const box4 = document.querySelector('#section4 .parallax__item__img');
const box5 = document.querySelector('#section5 .parallax__item__img');
const box6 = document.querySelector('#section6 .parallax__item__img');
const box7 = document.querySelector('#section7 .parallax__item__img');
const box8 = document.querySelector('#section8 .parallax__item__img');
const box9 = document.querySelector('#section9 .parallax__item__img');

// 01
gsap.to(box1, {
  x: 500,
  duration: 2,
  borderRadius: 100,
  rotation: 360,
});

// 02 : trigger
gsap.to(box2, {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,
  scrollTrigger: {
    trigger: box2,
  },
});

// 03:toggleActions
gsap.to(box3, {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,
  scrollTrigger: {
    trigger: box3,
    toggleActions: 'play none reverse none',
    // markers: true,
  },
});

// 04 : start, end
gsap.to(box4, {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,
  scrollTrigger: {
    trigger: box4,
    start: 'top 50%',
    end: 'bottom 20%',
    toggleActions: 'play none reverse none',
    // markers: true,
  },
});

// 05 :scrub
gsap.to(box5, {
  duration: 0.5,
  x: 500,
  rotation: 360,
  borderRadius: 100,
  scrollTrigger: {
    trigger: box5,
    start: 'top 50%',
    end: 'bottom 20%',
    scrub: true,
    markers: false,
  },
});

// 06 : pin
gsap.to(box6, {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,
  scrollTrigger: {
    trigger: box6,
    start: 'top 50%',
    end: 'bottom 200px',
    scrub: true,
    pin: true,
    markers: false,
  },
});

// 07 : toggleClass
gsap.to(box7, {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,
  scrollTrigger: {
    trigger: box7,
    start: 'top center',
    end: 'bottom 20%',
    scrub: true,
    toggleClass: 'active',
    markers: false,
    id: 'box7',
  },
});

// 08 : callback
gsap.to(box8, {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,

  scrollTrigger: {
    trigger: box8,
    start: 'top center',
    end: 'bottom 20%',
    scrub: true,
    // onEnter: () => {
    //   console.log('onEnter');
    // },
    // onLeave: () => {
    //   console.log('onLeave');
    // },
    // onEnterBack: () => {
    //   console.log('onEnterBack');
    // },
    // onLeaveBack: () => {
    //   console.log('onLeaveBack');
    // },
    onUpdate: (self) => {
      console.log('onUpdate', self.progress.toFixed(3));
    },
    onToggle: (self) => {
      console.log('onToggle', self.isActive);
    },

    markers: false,
    id: 'box8',
  },
});

// 09 : toggleClass
gsap.to(box9, {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,
  scrollTrigger: {
    trigger: box9,
    start: 'top center',
    end: 'bottom 20%',
    scrub: true,
    toggleClass: 'active',
    markers: false,
    id: 'box9',
  },
});
