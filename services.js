gsap.registerPlugin(ScrollTrigger);
let sect = gsap.utils.toArray(".slide");
    
let scrollTween = gsap.to(sect, {
  
  xPercent: -100 * (sect.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-sliders",
    pin: "#services",
    pinSpacing: true,
    scrub: 1,
    end: "+=3000",
  }
});



//   gsap.set(".el", {y: 100});
//   ScrollTrigger.defaults({markers: {startColor: "red", endColor: "red"}});

  gsap.to(".el", {
    y: -130,
    duration: 2,
    ease: "elastic",
    scrollTrigger: {
      trigger: ".el",
      containerAnimation: scrollTween,
      start: "left center",
      toggleActions: "play none none reset"
    }
  });
gsap.to('.next-block',{
  backgroundColor:'tomato',
  scrollTrigger:{
    trigger:'.next-block',
    pinnedContainer: ".main",
    start:'top 50%',
    toggleActions: 'play none reset none',
  }
})