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

// Function to check if the window size is not 1080p
function isNot1080p() {
  return window.innerWidth !== 1920;
}

// Function to create the popup
function createPopup() {
  // Create the popup element
  var popup = document.createElement('div');
  popup.textContent = 'Your window size is not 1080p!';

  // Style the popup
  popup.style.position = 'fixed';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.padding = '20px';
  popup.style.backgroundColor = 'white';
  popup.style.border = '1px solid black';

  // Append the popup to the body
  document.body.appendChild(popup);
}

// Check window size on page load
if (isNot1080p()) {
  createPopup();
}

// Check window size on window resize
window.addEventListener('resize', function() {
  if (isNot1080p()) {
    createPopup();
  }
});
