const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenLElements = document.querySelectorAll('.hiddenLeft');
hiddenLElements.forEach((elL) => observer.observe(elL));

const hiddenRElements = document.querySelectorAll('.hiddenRight');
hiddenRElements.forEach((elR) => observer.observe(elR));

let scrollText = document.querySelector(".scroll-text");

window.onscroll = () => {
    let pos = window.scrollY;
    scrollText.style.left =  `-${pos/0.5}px`;
}
