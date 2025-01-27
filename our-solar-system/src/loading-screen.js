// Documents Queries
const loadingScreen = document.querySelector(".loading");

// Delete the loading screen when content load
window.addEventListener("DOMContentLoaded", () => {
  document.body.removeChild(loadingScreen);
})

// Creating a timeline
// const planetsAnim = gsap.timeline();

// Loading animation
// planetsAnim
//   .to("test", {
//     x: 100,
//     duration: 1,
//     repeat: -1
//   })
//   .to("#plan2", {
//     x: -100,
//     duration: 1,
//     repeat: -1
//   })
//   .to("#plan3", {
//     x: -100,
//     duration: 1,
//     repeat: -1
//   });

// gsap.to(".planIcon1", {
//   motionPath: {
//     path: ".planIcon1",
//     align: ".planIcon1",
//     alignOrigin: [0.5, 0.5],
//     autoRotate: true,
//     start: 0.25,
//     end: 0.75,
//   },
//   transformOrigin: "50% 50%",
//   duration: 3,
// });
