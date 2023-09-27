var tl = gsap.timeline();
//page1 animation
tl.from(".page1 h1,.page1 p", {
  x: -50,
  opacity: 0,
  duration: 0.3,
  delay: 0.2,
  stagger: 0.2,
});
tl.from(".pageimg img", {
  y: -50,
  opacity: 0,
  duration: 0.3,
  delay: 0.2,
  stagger: 0.2,
});

//page2 animation
gsap.from(".page2 h1,.page2 p", {
  x: -50,
  opacity: 0,
  duration: 0.3,
  delay: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page2 h1,.page2 p",
    scroller: "body",
  },
});
gsap.from(".page2img img", {
  y: -50,
  opacity: 0,
  duration: 0.4,
  delay: 0.2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".page2img img",
    scroller: "body",
  },
});

//page3 animation
gsap.from(".page3 h1,.page3 p", {
  x: -50,
  opacity: 0,
  duration: 0.3,
  delay: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page3 h1,.page3 p",
    scroller: "body",
  },
});
gsap.from(".page3img img", {
  y: -50,
  opacity: 0,
  duration: 0.4,
  delay: 0.2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".page3img img",
    scroller: "body",
  },
});

//page4 animation
gsap.from(".page4 h1,.page4 p", {
  x: -50,
  opacity: 0,
  duration: 0.3,
  delay: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page4 h1,.page4 p",
    scroller: "body",
  },
});
gsap.from(".page4img img", {
  y: -50,
  opacity: 0,
  duration: 0.4,
  delay: 0.2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".page4img img",
    scroller: "body",
  },
});

//page5 animation
gsap.from(".page5 h1,.page5 p", {
  x: -50,
  opacity: 0,
  duration: 0.3,
  delay: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page5 h1,.page5 p",
    scroller: "body",
  },
});
gsap.from(".page5img img", {
  y: -50,
  opacity: 0,
  duration: 0.4,
  delay: 0.2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".page5img img",
    scroller: "body",
  },
});

//page6 animation
gsap.from(".page6 h1,.page6 p", {
  x: -50,
  opacity: 0,
  duration: 0.3,
  delay: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page6 h1,.page6 p",
    scroller: "body",
  },
});
gsap.from(".page6img img", {
  scale: 0.1,
  opacity: 0,
  duration: 0.5,
  delay: 0.3,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".page6img img",
    scroller: "body",
  },
});

//page7 animation
gsap.from(".page7 h1,.page7 p", {
  x: -50,
  opacity: 0,
  duration: 0.3,
  delay: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page7 h1,.page7 p",
    scroller: "body",
  },
});
gsap.from(".page7img img", {
  y: -50,
  opacity: 0,
  duration: 0.4,
  delay: 0.2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".page7img img",
    scroller: "body",
  },
});

gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".panel");
// we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
let tops = panels.map((panel) =>
  ScrollTrigger.create({ trigger: panel, start: "top top" })
);

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: () =>
      panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
    pin: true,
    pinSpacing: false,
  });
});

ScrollTrigger.create({
  snap: {
    snapTo: (progress, self) => {
      let panelStarts = tops.map((st) => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
        snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
      return gsap.utils.normalize(
        0,
        ScrollTrigger.maxScroll(window),
        snapScroll
      ); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
    },
    duration: 0.5,
  },
});
