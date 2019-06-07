// Your code goes here

const funBackground = document.querySelector('.fun-background');
const funBusFirst = document.querySelector('.fun-bus-initial');
const funBus = document.querySelector('.fun-bus');
funBackground.addEventListener('mouseover', () => {
    funBusFirst.classList.add('initial-fun-bus-moving');
    funBus.classList.add('fun-bus-moving');
})