let main = document.querySelector('.main');
let cursor = document.querySelector('.cursor');
let imageDiv = document.querySelector('.image');
let string = document.querySelector('svg');
let pathVal = 'M 10 100 Q 335 100 670 100'
let finalPath = 'M 10 100 Q 335 100 670 100'

main.addEventListener('mousemove', (event) => {
    gsap.to(cursor,{
        x: event.x,
        y: event.y,
        duration: 1,
        // ease: "back.out",
    })
});

imageDiv.addEventListener('mousemove', () => {
    gsap.to(cursor,{
        scale: 3
    });
    cursor.innerHTML = 'View More';
});

imageDiv.addEventListener('mouseleave', () => {
    gsap.to(cursor,{
        scale: 1
    });
    cursor.innerHTML = '';
});

string.addEventListener('mousemove', (event) =>{
    path = `M 10 100 Q 335 ${event.y} 670 100`;
    gsap.to('svg path', {
        attr:{d:path},
        duration: 0.2,
        ease: 'power3.out'
    })
});

string.addEventListener('mouseleave', (event) =>{
    gsap.to('svg path', {
        attr:{d:finalPath},
        duration: 1.5,
        ease: 'elastic.out(1,0.2)'
    })
});