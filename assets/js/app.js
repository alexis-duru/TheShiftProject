// CURSOR //

const cursor = document.querySelector('.cursor');


document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY -40)+"px; left:"+(e.pageX - 40)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add('expand');

    setTimeout(() => {
        cursor.classList.remove('expand');
    }, 300);
}) 

// COLOR HEADER //

const changeHeaderLinks = document.querySelector('header');
const changeColorNav = document.querySelector('.navcolor');


window.addEventListener('scroll', () => {
    if(window.scrollY > 670){
        changeHeaderLinks.classList.add('color-links');
    }else{
        changeHeaderLinks.classList.remove('color-links');
    }
    console.log(scroll)
});


window.addEventListener('scroll', () => {
    if(window.scrollY > 1450){
        changeHeaderLinks.classList.add('color-links2');
    }else{
        changeHeaderLinks.classList.remove('color-links2');
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 2200){
        changeHeaderLinks.classList.add('color-links3');
    }else{
        changeHeaderLinks.classList.remove('color-links3');
    }
    console.log(scroll)
});

// HIDDEN JA //

const jaHidden = document.querySelector('#JA');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 103){
        jaHidden.classList.add('jaHidden');
    }else{
        jaHidden.classList.remove('jaHidden');
    }
    console.log(scroll)
});

// ANIMATION MENU - IMAGE //

console.clear();
const elApp = document.querySelector("#app");

document.body.addEventListener("mousemove", (event) => {
  console.log({
    x: event.clientX,
    y: event.clientY
  });

  elApp.style.setProperty("--x", event.clientX);
  elApp.style.setProperty("--y", event.clientY);
});


let el = document.body;
el.addEventListener("click", function (e) {
  el.hidden = false;
  requestAnimationFrame(() => {
    el.hidden = false;
  });
});


// DARK MODE //

const button = document.querySelector('.buttonDarkMode');

button.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){
        // tips : replace à la place de add / remove //

        body.classList.replace('dark', 'light')
    }else{
        body.classList.replace('light', 'dark')
    } 
    console.log(body.classList)
        
});

