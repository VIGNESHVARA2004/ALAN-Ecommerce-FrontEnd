import React from 'react'

export const sliderFunction = () => {
const Container = document.querySelector('.slider');
const figure = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const interval = 2000;
const firstClone = slides[0].cloneNode(true);
figure.append(firstClone);
let index = 1;
let slideWidth = slides[1].clientWidth;
console.log(slides.length);
const startSlide = () =>{
    setInterval(() => {
        figure.style.transform  = `translateX(${-slideWidth * index}px)`;
        figure.style.transition = '0.7s';
        index++;
    }, interval);
};
figure.addEventListener('transitionend',() =>{
    if(slides.length +1 === index)
    {
        figure.style.transition = 'none';
        index = 0;
        figure.style.transform  = `translateX(${-slideWidth * index}px)`;
    }
});
startSlide();
  return (
    <div>sliderFunction</div>
  )
}
