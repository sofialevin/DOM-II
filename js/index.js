// Your code goes here

// mouseover event
const funBackground = document.querySelector('.fun-background');
const funBusFirst = document.querySelector('.fun-bus-initial');
const funBus = document.querySelector('.fun-bus');
funBackground.addEventListener('mouseover', () => {
    funBusFirst.classList.add('initial-fun-bus-moving');
    funBus.classList.add('fun-bus-moving');
})

//onload event

const scrollIndicator = document.querySelector('.chevron');

window.onload = () => {
    setTimeout(function() {
        scrollIndicator.style.display = 'block';
    }, 8000);
  };

  // scroll event

  window.addEventListener('scroll', function() {
    scrollIndicator.style.display = 'none';
  });

  // dblclick

const images = document.querySelectorAll('img');

images.forEach(function(element) {
    element.addEventListener('dblclick', function () {
        element.classList.toggle('images-size');
    })
});