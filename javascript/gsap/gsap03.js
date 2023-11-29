// 01.
// const panel = document.querySelector('#section1');
// console.log(panel);

// ScrollTrigger.create({
//   trigger: panel,
//   start: 'top top',
//   pin: true,
//   markers: true,
// });

// 02. 여러개 섹션 고정시키기
// const sections = gsap.utils.toArray('.parallax__item');

// sections.forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: 'top top',
//     pin: true,
//     markers: true,
//     pinSpacing: false,
//   });
// });

// 03. 스냅 고정 효과 만들기
const panels = gsap.utils.toArray('.parallax__item');
const top1 = panels.map((panel) =>
  ScrollTrigger.create({
    trigger: panel,
    start: 'top top',
  })
);

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    pin: true,
    markers: false,
    pinSpacing: false,
  });
});

ScrollTrigger.create({
  snap: {
    snapTo: (progress, self) => {
      let panelStarts = tops.map((st) => st.start),
        snapScroll = gsap.utils.snap(panelStarts, self.scroll());
      return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
    },
    duration: 0.5,
  },
});
