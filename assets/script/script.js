'use strict'
/* Quando clico no .button, .nav TOGGLE 'activo' */
const button = document.querySelector('button');/*me permite selecionar os dois elementos  */
const nav    = document.querySelector('nav');
const header = document.querySelector('header');
const wrapper = document.querySelector('wrapper')


button.addEventListener('click',()=>{
  nav.classList.toggle('activo')
  header.classList.toggle('activo')
  wrapper.classList.toggle('activo')
  
})





const bloco = document.querySelectorAll('.bloco');
const hh2   = document.querySelectorAll('.hh2');

// Quando clicar no hh2 
    //tirar a classe ativo de todos os blocos 
    //Adicionar a classe ativo ao bloco 

hh2.forEach((cadaH2, i) => {
  hh2[i].addEventListener('click',()=>{
    bloco[i].classList.toggle('ativo') 
  })
})  


/*Carrousel*/


const carousel = document.querySelector('.carousel');
const carouselTrack = carousel.querySelector('.carousel-track');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const carouselPrev = carousel.querySelector('.carousel-prev');
const carouselNext = carousel.querySelector('.carousel-next');
const carouselItemWidth = carouselItems[0].offsetWidth;
let currentIndex = 0;

function setTransformX(element, value) {
  element.style.transform = `translateX(${value}px)`;
}

function slideTo(index) {
  setTransformX(carouselTrack, -carouselItemWidth * index);
  currentIndex = index;
}

carouselPrev.addEventListener('click', () => {
  if (currentIndex === 0) {
    slideTo(carouselItems.length - 1);
  } else {
    slideTo(currentIndex - 1);
  }
});

carouselNext.addEventListener('click', () => {
  if (currentIndex === carouselItems.length - 1) {
    slideTo(0);
  } else {
    slideTo(currentIndex + 1);
  }
});

slideTo(0);

window.addEventListener('resize', () => {
  carouselItemWidth = carouselItems[0].offsetWidth;
  slideTo(currentIndex);
});






