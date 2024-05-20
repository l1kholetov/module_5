'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

let phoneAnimation;
btnPhone.addEventListener('click', () => {
  if (!phoneAnimation) {
    phoneAnimation = images[0].animate([
      {
        transform: 'translateY(0) rotate(0deg)',
        filter: 'opacity(100%)'
      },
      {
        transform: 'translateY(100px) rotate(120deg)',
        filter: 'opacity(50%)'},
      {
        transform: 'translateY(-100px) rotate(240deg)',
        filter: 'opacity(75%)'},
      {
        transform: 'translateY(0) rotate(360deg)',
        filter: 'opacity(100%)'}
    ], {
      duration: 3000,
      iterations: Infinity
    });
  } else if (phoneAnimation.playState === 'paused') {
    phoneAnimation.play();
  } else {
    phoneAnimation.pause();
  }
});

let macbookAnimation;
btnMacbook.addEventListener('click', () => {
  if (!macbookAnimation) {
    macbookAnimation = images[1].animate([
      {transform: 'translateX(0)'},
      {transform: 'translateX(600px)'},
      {transform: 'translateX(550px) translateY(10px)'},
      {transform: 'translateX(500px) translateY(-10px)'},
      {transform: 'translateX(450px) translateY(10px)'},
      {transform: 'translateX(400px) translateY(-10px)'},
      {transform: 'translateX(350px) translateY(10px)'},
      {transform: 'translateX(300px) translateY(-10px)'},
      {transform: 'translateX(250px) translateY(10px)'},
      {transform: 'translateX(200px) translateY(-10px)'},
      {transform: 'translateX(150px) translateY(10px)'},
      {transform: 'translateX(100px) translateY(-10px)'},
      {transform: 'translateX(50px) translateY(10px)'},
      {transform: 'translateX(0) translateY(0)'}
    ], {
      duration: 3000,
      iterations: Infinity
    });
  } else if (macbookAnimation.playState === 'paused') {
    macbookAnimation.play();
  } else {
    macbookAnimation.pause();
  }
});
