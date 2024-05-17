let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
let imageDiv = document.querySelector(".image");
let string = document.querySelector("svg");
let pathVal = "M 10 150 Q 335 150 670 150";
let finalPath = "M 10 150 Q 335 150 670 150";

main.addEventListener("mousemove", (event) => {
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
    duration: 1,
    // ease: "back.out",
  });
});

imageDiv.addEventListener("mousemove", () => {
  gsap.to(cursor, {
    scale: 3,
  });
  cursor.innerHTML = "View More";
});

imageDiv.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
  });
  cursor.innerHTML = "";
});

string.addEventListener("mousemove", (event) => {
  path = `M 10 150 Q 335 ${event.y} 670 150`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", (event) => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});




let h1 = document.querySelector('.company')

let h1Text = h1.textContent;

let splitText = h1Text.split("");

let halfText = Math.floor(splitText.length/2);

console.log(halfText);
let store = '';

splitText.forEach((event, idx) => {
  if (idx<halfText) {
    store += `<span class="a">${event}</span>`;
  } else{
    store += `<span class="b">${event}</span>`;
  }

});

h1.innerHTML = store;

gsap.from('.company .a', {
  y: 70,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.15
});

gsap.from('.company .b', {
  y: 70,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: -0.15
});